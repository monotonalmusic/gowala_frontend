import { useState } from "react";
import { backendURL } from "../services/settings";

const useProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const createProduct = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!image) {
      setError("Image is required.");
      return;
    }

    const payload = {
      title,
      price,
      discount,
      image,
    };

    try {
      const response = await fetch(`${backendURL}/product/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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

    try {
      const response = await fetch(`${backendURL}/product/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          discount,
          image,
        }),
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

  const deleteProduct = async (id) => {
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${backendURL}/product/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete product.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    createProduct,
    updateProduct,
    deleteProduct,
    title,
    setTitle,
    price,
    setPrice,
    discount,
    setDiscount,
    image,
    setImage,
    error,
    success,
    setSuccess
  };
};

export default useProduct;
