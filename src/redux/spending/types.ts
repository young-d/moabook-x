export interface SpendingInput {
  date: string;
  content: string;
  amount: number;
}

export interface Spending extends SpendingInput {
  id: string;
}

export type ActionType = 'ADD_SPENDING' | 'UPDATE_SPENDING' | 'REMOVE_SPENDING';

export type Action = { type: ActionType; payload: Spending };
