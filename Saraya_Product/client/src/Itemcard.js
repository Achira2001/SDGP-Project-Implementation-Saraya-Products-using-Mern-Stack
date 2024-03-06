import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('50g');

  const prices = {
    '50g': 75,
    '100g': 140,
    '500g': 650,
    '1kg': 1200
  };

  const handleAddToCart = () => {
    const price = prices[selectedSize];
    addItem({
      ...props.item,
      size: selectedSize,
      price: price,
      id: props.item.id + '-' + selectedSize // Unique identifier for each combination
    });
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedSize}
            </button>
            <div className="custom-dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button
                className="custom-dropdown-item"
                onClick={() => handleSelectSize('50g')}
              >
                50g
              </button>
              <button
                className="custom-dropdown-item"
                onClick={() => handleSelectSize('100g')}
              >
                100g
              </button>
              <button
                className="custom-dropdown-item"
                onClick={() => handleSelectSize('500g')}
              >
                500g
              </button>
              <button
                className="custom-dropdown-item"
                onClick={() => handleSelectSize('1kg')}
              >
                1kg
              </button>
            </div>
          </div>
          <h5 className="card-title">Rs. {prices[selectedSize]}</h5>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
