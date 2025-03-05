import axios from "axios";
import { API_USERS } from "./api";

export async function fetchUsers() {
  try {
    const response = await axios.get(API_USERS);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت کاربران:", error);
    return [];
  }
}
