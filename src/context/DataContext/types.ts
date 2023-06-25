export type StateType = {
  data: ActionTypeItem[] | any;
};

export type ActionTypeItem = {
  createdAt?: string;
  locale?: string;
  publishedAt?: string;
  test: string | undefined | null;
  updatedAt?: string;
};

export type ActionType = {
  type: string;
  payload: ActionTypeItem[];
};
