import axios from "axios";

export const getUserPage = async (page: number = 0, sort: string): Promise<any> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/list?page=${page}&orderBy=tokens:${sort}`);
  return data;
};