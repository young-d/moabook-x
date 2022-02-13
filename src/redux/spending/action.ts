import { v4 } from 'uuid';
import { Spending, SpendingInput } from './types';

export const addSpending = ({ date, content, amount }: SpendingInput) => {
  return {
    type: 'ADD_SPENDING',
    payload: {
      id: v4(),
      date,
      content,
      amount,
    },
  };
};

export const updateSpending = ({ id, date, content, amount }: Spending) => {
  return {
    type: 'UPDATE_SPENDING',
    payload: {
      id,
      date,
      content,
      amount,
    },
  };
};

export const removeSpending = (id: string) => {
  return {
    type: 'REMOVE_SPENDING',
    payload: {
      id,
      date: '',
      content: '',
      amount: 0,
    },
  };
};
