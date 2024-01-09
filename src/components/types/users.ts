interface IPlan {
  currency: string;
  id: string;
  price: number;
  tokens: number;
  type: string;
}

interface ISubscription {
  additional_tokens: number;
  created_at: string;
  id: string;
  plan: IPlan;
  plan_id: string;
  tokens: number;
  user_id: string;
}

export interface IUser {
  avatar?: null | string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  password?: null | string;
  role: string;
  subscription: ISubscription;
  tg_id?: null | string;
}