import { Button } from "@chakra-ui/react";
import { Tabel } from "./productTabele";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import GreenButton from "../shared/buttons/greenButton";
import InputField from "../shared/inputs/inputField";
import { addProduct, fetchProducts, deleteProduct } from "@/api/apiProduct";
import { Header } from "../home/header/header";

// import Swal from "sweetalert2"; // Make sure SweetAlert2 is imported

export default function Products() {
  const [plusBtn, setPlusBtn] = useState<any>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    date: "",
    product: "",
    price: "",
    sale: "",
    changes: "",
  });

  const [input, setInput] = useState({
    date: "",
    product: "",
    price: "",
    sale: "",
    changes: "",
  });
  const [product, setProducts] = useState([]);

  const handleSubmitFormProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      date: input.date ? "" : "لطفا تاریخ را انتخاب کنید",
      product: input.product ? "" : "لطفا محصولات را انتخاب کنید",
      price: input.price ? "" : "لطفا قیمت را وارد کنید",
      sale: input.sale ? "" : "لطفا مقدار فروش را وارد کنید",
      changes: input.changes ? "" : "لطفا توضیحات تغییرات را وارد کنید",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try {
      const newProduct = {
        date: input.date,
        name: input.product,
        price: input.price,
        sales: input.sale,
        changes: input.changes,
        status: "فعال",
        id: product.length + 1,
      };

      const addedProduct = await addProduct(newProduct);

      setProducts((prev) => [...prev, addedProduct]);

      setInput({ date: "", product: "", price: "", sale: "", changes: "" });

      setPlusBtn(false);

      Swal.fire({
        title: "Product added successfully!",
        icon: "success",
        draggable: true,
        text: "Your product has been added to the list.",
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue adding your product.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data || []));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleDeleteProduct = async (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const isDeleted = await deleteProduct(id);
          if (isDeleted) {
            setProducts((prev) => prev.filter((product) => product.id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="flex justify-center items-center h-screen bg-white">
          <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
            <div className="flex flex-row gap-8 items-center">
              <button onClick={() => setPlusBtn(true)}>
                <FaCirclePlus className="text-green-500 w-10 h-10" />
              </button>
              <div className="flex items-center border-4 border-green-800 rounded-md overflow-hidden shadow-lg">
                <Button colorPalette="green" size="md" className="rounded-none">
                  سرچ کنید
                </Button>
                <input
                  type="text"
                  placeholder="سرچ کنید..."
                  className="w-full h-10 px-4 outline-none border-none serach-bar-text"
                />
                <IoSearch color="green" className="w-7 h-7" />
              </div>
            </div>

            <div className="border-4 border-green-500 overflow-y-auto h-72 custom-scrollbar">
              <Tabel products={product} onDelete={handleDeleteProduct} />
            </div>
          </div>
        </div>

        {plusBtn && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-[#33333399] bg-opacity-30 z-50"
            onClick={() => setPlusBtn(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white flex flex-col w-96 min-h-96 !p-4 rounded-2xl gap-2"
            >
              <button onClick={() => setPlusBtn(false)}>
                <AiOutlineCloseCircle className="w-6 h-6 hover:bg-gray-100 rounded-full" />
              </button>
              <form onSubmit={handleSubmitFormProduct}>
                <InputField
                  label="تاریخ"
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={handleInputChange}
                />
                {errors.date && (
                  <p className="text-red-500 !text-sm">{errors.date}</p>
                )}

                <InputField
                  label="محصولات"
                  type="text"
                  name="product"
                  placeholder="نام محصول..."
                  value={input.product}
                  onChange={handleInputChange}
                />
                {errors.product && (
                  <p className="text-red-500 !text-sm">{errors.product}</p>
                )}

                <InputField
                  label="قیمت"
                  type="number"
                  name="price"
                  placeholder="قیمت..."
                  value={input.price}
                  onChange={handleInputChange}
                />
                {errors.price && (
                  <p className="text-red-500 !text-sm">{errors.price}</p>
                )}

                <InputField
                  label="فروش"
                  type="number"
                  name="sale"
                  placeholder="مقدار فروش..."
                  value={input.sale}
                  onChange={handleInputChange}
                />
                {errors.sale && (
                  <p className="text-red-500 !text-sm">{errors.sale}</p>
                )}

                <InputField
                  label="تغییرات"
                  type="text"
                  name="changes"
                  placeholder="توضیحات تغییرات..."
                  value={input.changes}
                  onChange={handleInputChange}
                />
                {errors.changes && (
                  <p className="text-red-500 !text-sm">{errors.changes}</p>
                )}

                <GreenButton
                  type="submit"
                  variant={"submit"}
                  children={"ثبت"}
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
