import React, { useCallback, useState } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { Icon, Nav } from 'rsuite';
import PRODUCTS from '../Database/products.json';
import { useCart, useCartDispatch } from '../misc/cart.context';

function getCheckoutItems(products, cartItems) {
  const productInCart = products.filter(p =>
    cartItems.some(item => item.id === p.id)
  );

  return productInCart.map(product => {
    return {
      ...product,
      quantity: cartItems.find(item => item.id === product.id).quantity,
    };
  });
}

const Checkout = () => {
  const [products] = useState(PRODUCTS);

  const cart = useCart();
  const dispatchCart = useCartDispatch();

  const checkoutItems = getCheckoutItems(products, cart);

  const cartPriceTotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveOne = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE_ONE', id });
    },
    [dispatchCart]
  );

  const handleAdd = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ONE', id });
    },
    [dispatchCart]
  );

  const handleRemove = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE', id });
    },
    [dispatchCart]
  );

  return (
    <div>
      <Nav appearance="tabs" style={{ height: '50px' }} justified>
        <div className="mt-2 ml-3">
          <Nav.Item icon={<Icon icon="home" />} href="/">
            {' '}
            <b>Home</b>{' '}
          </Nav.Item>
          <Nav.Item
            icon={<Icon icon="keyboard-o" />}
            href="/Categories/fgsa2142fa"
          >
            Keyboard
          </Nav.Item>
          <Nav.Item
            icon={<Icon icon="headphones" />}
            href="/Categories/xasgy42fa"
          >
            Headphone
          </Nav.Item>
        </div>
      </Nav>

      <div>
        <h3 className="mb-3 mt-3 ml-3">Checkout</h3>
        <div
          className="bg-black-02 p-3"
          style={{
            margin: '30px',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        >
          <Table responsive>
            <thead>
              <tr>
                <th style={{ borderTop: 0 }}> </th>
                <th style={{ borderTop: 0 }}>Name</th>
                <th style={{ borderTop: 0 }}>Price</th>
                <th style={{ borderTop: 0 }}>Quantity</th>
                <th style={{ borderTop: 0 }}> </th>
              </tr>
            </thead>
            <tbody>
              {checkoutItems.map(el => (
                <tr key={el.id} className="">
                  <td>
                    <img
                      src={el.thumbnail}
                      alt={el.name}
                      style={{ width: 50, height: 'auto' }}
                    />
                  </td>
                  <td className="font-bolder align-items-center text-nowrap">
                    {el.name}
                  </td>
                  <td className="font-bolder align-items-center">
                    ${el.price}
                  </td>
                  <td className="font-bolder align-items-center">
                    <ButtonGroup>
                      <Button
                        size="sm"
                        type="button"
                        onClick={() => handleRemoveOne(el.id)}
                      >
                        -
                      </Button>
                      <Button disabled style={{ width: 45 }}>
                        {el.quantity}
                      </Button>
                      <Button
                        size="sm"
                        type="button"
                        onClick={() => handleAdd(el.id)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="font-bolder align-items-center">
                    <Button
                      color="dark"
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: 30,
                        height: 30,
                        lineHeight: 0.6,
                        fontSize: 20,
                      }}
                      type="button"
                      onClick={() => handleRemove(el.id)}
                    >
                      &times;
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr />
          <div className="text-right">
            <h3>Total ${cartPriceTotal}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
