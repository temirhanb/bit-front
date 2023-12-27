import axios from "axios";

export const getUserTransaction = async (id: string ): Promise<any> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/${id}/transactions`);
  return data;
};