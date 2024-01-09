import axios from "axios";
import {IUser} from "../components/types/users";

export const getUserPage = async (page: number = 0, sort: string): Promise<{ pages: number, data: IUser[] }> => {
  const {data} = await axios.get(`https://test.gefara.xyz/api/v1/user/list?page=${page}&orderBy=tokens:${sort}`);
  return data;
};