import React from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import { jsPDF } from 'jspdf';
import Itemcard from "../Itemcard";
import data from "../data";
import './Cart.css';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const sendProductData = async (item) => {
    try {
      const response = await axios.post('/products', {
        img: item.img,
        title: item.title,
        desc: item.desc,
        price: item.price
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Set up formatting
    const margin = 10;
    const lineHeight = 10;
    const maxWidth = doc.internal.pageSize.getWidth() - 2 * margin;

    // Add header
    doc.setFontSize(18);
    doc.text('Receipt', margin, margin);

    // Add date
    const date = new Date();
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    doc.setFontSize(12);
    doc.text(`Date: ${dateString}`, margin, margin + lineHeight);

    // Add items
    doc.setFontSize(12);
    let yPosition = margin + 3 * lineHeight;
    items.forEach((item, index) => {
      const { title, price, size, quantity } = item;
      const itemText = `${title} - Rs. ${price} x ${quantity} (${size})`;
      const lines = doc.splitTextToSize(itemText, maxWidth);
      doc.text(lines, margin, yPosition);
      yPosition += (lines.length + 0.5) * lineHeight;
    });

    // Add total
    doc.setFontSize(14);
    const totalText = `Total: Rs. ${cartTotal}`;
    doc.text(totalText, margin, yPosition + lineHeight);

    // Save the PDF
    doc.save('receipt.pdf');

    // Optionally clear the cart after purchase
    emptyCart();
  };

  return (
    <div>
      <h1 className="text-center mt-3" style={{ color: 'white' }}>All Items</h1>

      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => (
            <Itemcard
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
              sendProductData={() => sendProductData(item)}
            />
          ))}
        </div>
      </section>

      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}) Total Items: ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                    </td>
                    <td>{item.title} ({item.size})</td>
                    <td>Rs. {item.price}</td>
                    <td>Quantity: {item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1} // Disable button if quantity is 1
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                        Remove Item
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: Rs. {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="btn btn-primary ms-2" onClick={generatePDF}>
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
