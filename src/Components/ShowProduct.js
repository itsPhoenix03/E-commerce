import React from 'react';
import { StyledShowProduct } from './ShowProduct.styled';

const ShowProduct = ({ name, image, price, currency, delivery, inStock }) => {
  return (
    <StyledShowProduct>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>
      {inStock ? (
        <>
          <h4>
            <u>Price</u>: {price} {currency}
          </h4>
          <h4>
            <u>Delivery</u>:{' '}
            {delivery ? <span>Available</span> : <span>Unavailable</span>}
          </h4>

          <div className="btns">
            <button type="button">Add to Cart</button>
          </div>
        </>
      ) : (
        <h4 className="text-red">Out Of Stock</h4>
      )}
    </StyledShowProduct>
  );
};

export default ShowProduct;
