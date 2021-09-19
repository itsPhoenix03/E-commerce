import { useCallback, useEffect, useReducer, useState } from 'react';

export function useModalState(defalutValue = false) {
  const [isOpen, setIsOpen] = useState(defalutValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
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

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = evt => setMatches(evt.matches);

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [query]);

  return matches;
};
