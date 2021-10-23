import React, { Fragment } from 'react';

const Header = ({ handleChange, onHandleSearch, totalAmount, subTotal }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div href="/" className="navbar-brand">
          <a href="/">React-TEST</a>
        </div>
        <form>
          <input type="text" placeholder="Insert product name" className="form-control" defaultValue="" onKeyUp={(e) => handleChange(e)} />
          <button className="btn btn-info" type="submit" onClick={onHandleSearch}>
            Search
          </button>
        </form>
        <div className="container-info">
          <span className="text-warning">Total productos: {totalAmount}</span>
          <br />
          <span className="text-danger">Subtotal: {subTotal}</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
