import React, { useState } from 'react';
import './product.scss';

const Product = ({ name, price, photo, setAmount, amount, priceList, setPriceList }) => {
  const [productAmount, setProductAmount] = useState(0);
  const canDecrement = productAmount > 0;

  const incrementAndDecrement = (operation) => {
    if (operation === '+') {
      setProductAmount(productAmount + 1);
    } else if (operation === '-' && canDecrement) {
      setProductAmount(productAmount - 1);
    }
  };

  const handleChangeAmount = (e) => {
    const target = parseInt(e.target.value);
    setProductAmount(target || 0);
  };

  const addToCart = () => {
    if (productAmount) {
      setAmount([...amount, productAmount]);
      const pricePerCuantity = productAmount * price;
      setPriceList([...priceList, pricePerCuantity]);
      setProductAmount(0);
    }
  };

  return (
    <div className="product-box">
      <img src={photo} alt="product" height="150px" className="m-3" />
      <span>{name}</span>
      <span>
        <strong>$ {price}</strong>
      </span>
      <div className="footer-buttons">
        <button
          className="increment"
          onClick={() => {
            incrementAndDecrement('+');
          }}
        >
          +
        </button>
        <input className="product-amount" type="text" onChange={handleChangeAmount} value={productAmount} />
        <button
          className="decrement"
          onClick={() => {
            incrementAndDecrement('-');
          }}
        >
          -
        </button>
        <br />
        <button className="btn btn-success" onClick={addToCart} disabled={!productAmount}>
          Agregar al carro
        </button>
      </div>
    </div>
  );
};

export default Product;
Product.displayName = 'Product';
