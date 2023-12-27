import axios from "axios";

export const getUserPage = async (page: number = 0): Promise<any> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/list?page=${page}`);
  return data;
};