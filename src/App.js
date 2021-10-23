import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import { productsEndPoint } from './constants/base_api';

const App = () => {
  const [text, setText] = useState('');
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [productNotFound, setProductNotFound] = useState(false);
  const [amount, setAmount] = useState([]);
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const totalAmount = amount.length ? amount.reduce((acc, el) => acc + el) : 0;
  const subTotal = priceList.length ? priceList.reduce((acc, el) => acc + el) : 0;

  const handleChangeText = (e) => {
    const target = e.target.value;
    setText(target.toLowerCase());
    if (!e.target.value) {
      setFilterProduct([]);
      setProductNotFound(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    filterProducts(text.trim());
  };

  const filterProducts = (productToSearch) => {
    if (productToSearch) {
      const filtered = [...products].filter((item) => item.name.toLowerCase().includes(productToSearch.toLowerCase()));
      return filtered.length ? setFilterProduct(filtered) : setProductNotFound(true);
    }
  };

  const getProducts = () => {
    fetch(productsEndPoint)
      .then((resp) => {
        return resp.json();
      })
      .then((product) => {
        setProducts(product);
      });
  };

  return (
    <div className="App">
      <Header handleChange={handleChangeText} onHandleSearch={handleSearch} totalAmount={totalAmount} subTotal={subTotal} />
      <ProductList
        products={filterProduct.length ? filterProduct : products}
        productNotFound={productNotFound}
        setAmount={setAmount}
        amount={amount}
        priceList={priceList}
        setPriceList={setPriceList}
      />
    </div>
  );
};

export default App;
