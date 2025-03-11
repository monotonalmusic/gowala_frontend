import { useState } from "react";
import { backendURL } from "../services/settings";

const useProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [file, setFile] = useState(null); // Renaming to 'file' to match backend
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const createProduct = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!file) {
      setError("Image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("file", file); // Ensuring it matches backend

    try {
      const response = await fetch(`${backendURL}/product/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create product.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateProduct = async (id, e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("discount", discount);
    if (file) {
      formData.append("file", file); // Ensuring it matches backend
    }

    try {
      const response = await fetch(`${backendURL}/product/`, { // Sending ID in body, not URL
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update product.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    createProduct,
    updateProduct,
    title,
    setTitle,
    price,
    setPrice,
    discount,
    setDiscount,
    file,
    setFile,
    error,
    success,
    setSuccess,
  };
};

export default useProduct;
