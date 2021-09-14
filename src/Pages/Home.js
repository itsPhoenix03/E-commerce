import React from 'react';
import { Button, Icon, Nav } from 'rsuite';
import categories from '../Database/categories.json';

const Home = () => {
  return (
    <>
      <Nav appearance="tabs" style={{ height: '50px' }} justified>
        <div className="mt-2 ml-3">
          <Nav.Item icon={<Icon icon="home" />} href="/" />
          <Nav.Item icon={<Icon icon="shopping-cart" />} href="/Checkout" />
          <Nav.Item>
            <span>
              <u>Amount</u>: $ 00
            </span>
          </Nav.Item>
        </div>
      </Nav>
      <div className="text-center">
        {categories.map(item => {
          return (
            <Button className="mt-page mr-3 ml-3 cursor-pointer">
              <a
                key={item.id}
                className="text-center text-black link-unstyled font-bolder"
                href={`/Categories/${item.id}`}
              >
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </a>
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
