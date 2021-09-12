import React from 'react';
import ShowProduct from './ShowProduct';
import { FlexGrid } from './styled';
import products from '../Database/products.json';
import { getItems } from '../misc/helper';

const Product = ({ id }) => {
  const releventProducts = getItems(id, products);
  return (
    <FlexGrid className="mt-3">
      {releventProducts.map(item => {
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
