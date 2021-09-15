import React from 'react';
import { Icon, Nav } from 'rsuite';
import { useCart } from '../../misc/cart.context';

const Navbar = () => {
  const cart = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Nav appearance="tabs" style={{ height: '50px' }} justified>
      <div className="mt-2 ml-3">
        <Nav.Item icon={<Icon icon="home" />} href="/" />
        <Nav.Item icon={<Icon icon="shopping-cart" />} href="/Checkout" />
        <Nav.Item>
          <span className="ml-3">
            <b>Items in Cart</b>: {cartItemCount} <b className="ml-3">Amount</b>
            : ${totalCartPrice}
          </span>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
