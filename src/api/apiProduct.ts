import axios from "axios";
import { API_PRODUCT } from "./api";

export async function fetchProducts() {
    try {
      const response = await axios.get(API_PRODUCT);
      return response.data;
    } catch (error) {
      console.error("خطا در دریافت محصولات:", error);
      return [];
    }
  }
  

  export async function addProduct(productData) {
    try {
        const response = await axios.post(API_PRODUCT, productData);
        return response.data;
    } catch (error) {
        console.error("خطا در افزودن محصول:", error);
        throw error; 
    }
}

export async function deleteProduct(id: number) {
  try {
      const response = await axios.delete(`${API_PRODUCT}/${id}`);
      console.log("محصول با موفقیت حذف شد:", response.data);
      return true;
  } catch (error) {
      console.error("❌ خطا در حذف محصول:", error.response ? error.response.data : error.message);
      return false;
  }
}

