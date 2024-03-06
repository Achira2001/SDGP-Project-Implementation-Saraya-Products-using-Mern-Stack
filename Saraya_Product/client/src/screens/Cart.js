import React from 'react';
import { useCart } from 'react-use-cart';
import { jsPDF } from 'jspdf';

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

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date();
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    doc.text('Receipt', 20, 20);
    doc.text(`Date: ${dateString}`, 20, 30);

    if (items.length === 0) {
      doc.text('No items in cart.', 20, 40);
      return; // Early return to avoid errors if cart is empty
    }

    items.forEach((item, index) => {
      const { title, price, size, quantity } = item;
      doc.text(`${title} - Rs. ${price} x ${quantity} (${size})`, 20, 40 + (10 * index));
    });
    doc.text(`Total: Rs. ${cartTotal}`, 20, 40 + (10 * items.length));

    // Save the PDF
    doc.save('receipt.pdf');

    // Optionally clear the cart after purchase
    emptyCart();
  };

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
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
  );
};

export default Cart;
