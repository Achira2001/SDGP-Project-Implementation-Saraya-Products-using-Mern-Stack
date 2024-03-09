// ItemCard.js

import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('50g');

  const prices = {
    'Curry Powder': {
      '50g': 5,
      '100g': 10,
      '500g': 50,
      '1kg': 100
    },
    'Chilli Powder': {
      '50g': 80,   // Updated price for Chilli Powder
      '100g': 130, // Updated price for Chilli Powder
      '500g': 300, // Updated price for Chilli Powder
      '1kg': 700   // Updated price for Chilli Powder
    },
    'Chilli Pieces': {
      '50g': 90,
      '100g': 180,
      '500g': 400,
      '1kg': 800
    },
    'Tumeric Powder': {
      '50g': 75,
      '100g': 140,
      '500g': 650,
      '1kg': 1200
    },
    'Peppar Powder': {
      '50g': 85,
      '100g': 160,
      '500g': 750,
      '1kg': 1400
    }
  };

  const handleAddToCart = () => {
    const price = prices[props.title][selectedSize]; // Get the price based on product title and selected size
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
          <h5 className="card-title">Rs. {prices[props.title][selectedSize]}</h5>
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
