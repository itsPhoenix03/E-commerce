import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { Divider, Icon, Nav } from 'rsuite';
import ProductItems from '../Database/products.json';
import categories from '../Database/categories.json';
import Product from '../Components/Product';
import FilterNav from '../Components/FilterNav';
import { useFilter } from '../misc/helper';

function getFilteredItems(products, filter) {
  let result = [...products];

  if (filter.inStock) result = result.filter(p => p.inStock === true);

  if (filter.delivery) result = result.filter(p => p.delivery === true);

  if (filter.expensive) result = result.filter(p => p.price > 100);

  return result;
}

const Categories = () => {
  const { id } = useParams();
  const category = categories.find(c => c.id === id);
  const [products] = useState(ProductItems.filter(p => p.categoryId === id));

  const [filter, dispatchFilter] = useFilter({
    inStock: false,
    delivery: false,
    expensive: false,
  });

  const filteredProducts = getFilteredItems(products, filter);

  const onFilterChange = useCallback(
    ev => {
      const checkbox = ev.target;

      dispatchFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );

  if (!category) {
    return <div>Category with id {id} does not exist</div>;
  }

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
      <span className=" ml-3 mt-2 font-bolder">
        <u>FILTER</u>:
      </span>
      <div className="ml-3 mt-2 d-inline-flex">
        <FilterNav
          id="inStock"
          name="inStock"
          checked={filter.inStock}
          onChange={onFilterChange}
          label="In Stock"
        />
        <FilterNav
          id="delivery"
          name="delivery"
          checked={filter.delivery}
          onChange={onFilterChange}
          label="Delivery"
        />
        <FilterNav
          id="expensive"
          name="expensive"
          checked={filter.expensive}
          onChange={onFilterChange}
          label="Expensive"
        />
      </div>
      <Divider />
      <h2 className="ml-3">{category.name}</h2>
      <div className="ml-3">
        Showing Results {filteredProducts.length} of {products.length}
      </div>
      <Product products={filteredProducts} />;
    </>
  );
};

export default Categories;
