import React from 'react';
import ShowProduct from './ShowProduct';
import { FlexGrid } from './styled';

const Product = ({ products }) => {
  return (
    <FlexGrid className="mt-3">
      {products.map(item => {
        return (
          <ShowProduct
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.thumbnail}
            price={item.price}
            currency={item.currency}
            delivery={item.delivery}
            inStock={item.inStock}
          />
        );
      })}
      ;
    </FlexGrid>
  );
};

export default Product;
