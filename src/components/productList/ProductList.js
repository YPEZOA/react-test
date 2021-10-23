import React from 'react';
import Product from '../product/Product';
import './productList.scss';

const ProductList = ({ products, productNotFound, setAmount, amount, priceList, setPriceList }) => {
  return productNotFound ? (
    <div>
      <h1>Resultado de busqueda </h1>
    </div>
  ) : (
    <div className="container-cards">
      {products.map((data) => {
        const { id, name, price, photo } = data;
        const numberFormat = new Intl.NumberFormat('es-CL');
        const priceFormat = numberFormat.format(price);
        return <Product key={id} name={name} price={priceFormat} photo={photo} setAmount={setAmount} amount={amount} priceList={priceList} setPriceList={setPriceList} />;
      })}
    </div>
  );
};
export default ProductList;
