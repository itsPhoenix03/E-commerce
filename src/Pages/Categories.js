import React from 'react';
import { useParams } from 'react-router';
import { Icon, Nav } from 'rsuite';
import Product from '../Components/Product';

const Categories = () => {
  const { id } = useParams();

  return (
    <>
      <Nav appearance="tabs" style={{ height: '50px' }} justified>
        <div className="mt-2 ml-3">
          <Nav.Item icon={<Icon icon="home" />} href="/" />
          <Nav.Item icon={<Icon icon="shopping-cart" />} href="/Checkout" />
          <Nav.Item>
            <span>
              <u>Amount</u>: $ 00{' '}
            </span>
          </Nav.Item>
        </div>
      </Nav>
      <Product id={id} />;
    </>
  );
};

export default Categories;
