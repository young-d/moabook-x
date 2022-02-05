import { Action, Spending } from './types';

export const spending = (state: Spending[], action: Action) => {
  switch (action.type) {
    case 'ADD_SPENDING': {
      const newSpending = action.payload;

      return [...state, newSpending];
    }
    case 'UPDATE_SPENDING': {
      const updatedSpending = action.payload;

      return state.map((spending) =>
        spending.id === updatedSpending.id ? updatedSpending : spending,
      );
    }
    case 'REMOVE_SPENDING': {
      const removedSpending = action.payload;

      return state.filter((spending) => spending.id !== removedSpending.id);
    }
    default:
      return state;
  }
};
