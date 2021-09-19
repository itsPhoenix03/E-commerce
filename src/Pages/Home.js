import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import categories from '../Database/categories.json';
import Navbar from '../Components/Navigation/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        {categories.map(item => {
          return (
            <Button className="mt-page mr-3 ml-3">
              <Link
                key={item.id}
                className="text-center text-black link-unstyled font-bolder"
                to={`/Categories/${item.id}`}
              >
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </Link>
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
