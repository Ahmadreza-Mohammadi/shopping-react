import axios from "axios";
import { BASE_URL, header } from "./api";

export async function userRegister(body) {
  const res = await axios.post(`${BASE_URL}`, body, {
    headers: header,
  });
  return res.data;
}
