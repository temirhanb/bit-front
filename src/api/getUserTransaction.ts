import axios from "axios";
import {ITransactions} from "../components/types/transactions";

export const getUserTransaction = async (id: string ): Promise<ITransactions[]> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/${id}/transactions`);
  return data;
};