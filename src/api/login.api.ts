import axios from "axios";
import { BASE_URL, header } from "./api";

export async function userLogin(body) {
  const res = await axios.post(`${BASE_URL}/api/users/login`, body, {
    headers: header,
  });
  return res.data;
}

// export async function isLogin(token) {
//   const res = await axios.get(`${BASE_URL}/api/users/me`, {
//     headers: {
//       ...header,
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.status;
// }
