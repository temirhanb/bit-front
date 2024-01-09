import axios from "axios";
import {IUser} from "../components/types/users";

export const getUserSearch = async (name: string = "", page: number = 1): Promise<IUser[]> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/list?search=${name}&page=${page}`);
  return data;
};