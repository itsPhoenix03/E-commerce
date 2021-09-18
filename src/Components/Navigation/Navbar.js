import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon, Nav } from 'rsuite';
import { useCart } from '../../misc/cart.context';

const CATEGORY_ID = ['fgsa2142fa', 'xasgy42fa'];

const Navbar = () => {
  const { id } = useParams();
  const isCategoryId = CATEGORY_ID.includes(id);

  const cart = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Nav appearance="tabs" style={{ height: '50px' }} justified>
      <div className="mt-2 ml-3">
        <Nav.Item icon={<Icon icon="home" />}>
          <Link to="/" className="link-unstyled text-black">
            <b>Home</b>
          </Link>
        </Nav.Item>
        <Nav.Item icon={<Icon icon="shopping-cart" />}>
          <Link to="/Checkout" className="link-unstyled text-black">
            <b>Checkout</b>
          </Link>
        </Nav.Item>
        {isCategoryId && (
          <>
            <Nav.Item icon={<Icon icon="keyboard-o" />}>
              <Link
                to="/Categories/fgsa2142fa"
                className="link-unstyled text-black"
              >
                Keyboard
              </Link>
            </Nav.Item>
            <Nav.Item icon={<Icon icon="headphones" />}>
              <Link
                to="/Categories/xasgy42fa"
                className="link-unstyled text-black"
              >
                Headphone
              </Link>
            </Nav.Item>
          </>
        )}
      </div>
      <div className="mt-3">
        <span className="ml-3">
          <b>Items in Cart: {cartItemCount}</b>{' '}
          <b className="ml-3">Amount: ${totalCartPrice}</b>
        </span>
      </div>
    </Nav>
  );
};

export default Navbar;
