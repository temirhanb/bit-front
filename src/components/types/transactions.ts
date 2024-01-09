export interface ITransactions{
  amount:number
  created_at:string
  currency:string
  external_id?:null
  id:string
  meta?:null|string
  plan_id?:null|string
  provider:string
  referral_id?:string|null
  status:string
  type:string
  user_id:string
}