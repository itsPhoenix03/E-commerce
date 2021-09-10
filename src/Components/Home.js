import React, { useCallback } from 'react';
import { Redirect } from 'react-router';
import { Button } from 'rsuite';
import data from '../categories.json';

const Home = () => {
  const [item] = data;
  const { name, description } = item;

  const onClick = useCallback(() => {
    <Redirect to="/categories" />;
  }, []);

  return (
    <>
      <div className="text-center mt-page">
        <Button onClick={onClick} size="lg" className="mr-3">
          <h3 className="font-bolder"> {name} </h3>
          <p> {description} </p>
        </Button>

        <Button onClick={onClick} size="lg" className="mr-3 font-bolder">
          Headphone
        </Button>
      </div>
    </>
  );
};

export default Home;
