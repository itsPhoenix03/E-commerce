import { useReducer } from 'react';

export function getItems(id, products) {
  const items = [];

  products.forEach(item => {
    if (item.categoryId === id) items.push(item);
  });

  return items;
}

const createFilterReducer = initialState => (action, state) => {
  switch (action.type) {
    case 'RESET':
      return initialState;

    case 'SET':
      return { ...state, [action.filterName]: action.value };

    default:
      return state;
  }
};

export const useFilter = initialState => {
  const filterReducer = createFilterReducer(initialState);

  return useReducer(filterReducer, initialState);
};
