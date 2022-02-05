import { Spending, SpendingInput } from './types';

export const addSpending = ({ date, content, amount }: SpendingInput) => {};

export const updateSpending = ({ id, date, content, amount }: Spending) => {};

export const removeSpending = (id: string) => {};
