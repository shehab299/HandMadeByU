import { createdProduct } from "@types";
import { API_URL } from "constants";
import { Product } from "../hooks/useCreateProduct";

async function uploadImage(file: File): Promise<{ fileUrl: string }> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/upload/product`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });

  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message || "Failed to upload product image");
  }

  return { fileUrl: data.fileUrl };
}

async function createProduct({
  shopId,
  product,
}: {
  shopId: string;
  product: Product;
}): Promise<createdProduct> {
  const { fileUrl } = await uploadImage(product.image);

  const productWithImage = {
    ...product,
    image: fileUrl,
  };

  const res = await fetch(`${API_URL}/shops/${shopId}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(productWithImage),
  });

  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message || "Failed to create product");
  }

  return data.data.product;
}

export { createProduct };
