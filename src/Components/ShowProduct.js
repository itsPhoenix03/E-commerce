import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../misc/custom-hooks';
import { StyledShowProduct } from './ShowProduct.styled';

const ShowProduct = ({ name, image, price, currency, delivery, inStock }) => {
  const { isOpen, open, close } = useModalState();

  return (
    <StyledShowProduct>
      <div className="img-wrapper">
        <img src={image} alt={name} />
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

          <div className="btns d-inline-flex">
            <Button onClick={open} className="mr-3">
              Preview
            </Button>
            <Button type="button">Add to Cart</Button>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-red">Out Of Stock</h4>
          <div className="btns d-inline-flex">
            <Button onClick={open} className="mr-3 mt-3">
              Preview
            </Button>
          </div>
        </>
      )}
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img src={image} alt={name} style={{ width: '60%', height: '50%' }} />
          <span className="ml-1 font-bolder ">
            <p>
              Price: {price} {currency}
            </p>
            {inStock ? (
              <>
                <p>
                  Delivery:{' '}
                  {delivery ? (
                    <span className="text-green">Available</span>
                  ) : (
                    <span className="text-red">Unavailable</span>
                  )}
                </p>
              </>
            ) : (
              <span className="text-red mt-3">Currently Out Of Stock</span>
            )}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close} disabled={!inStock} color="green">
            Add to Cart
          </Button>

          <Button onClick={close} color="cyan">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </StyledShowProduct>
  );
};

export default ShowProduct;
