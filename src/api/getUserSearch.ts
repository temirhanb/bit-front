import axios from "axios";

export const getUserSearch = async (name: string = "", page: number = 1): Promise<any> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/list?search=${name}&page=${page}`);
  return data;
};