import { createdProduct } from "@types";
import { API_URL } from "constants";

async function createProduct({
  shopId,
  product,
}: {
  shopId: string;
  product: createdProduct;
}): Promise<createdProduct> {
  const res = await fetch(`${API_URL}/shops/${shopId}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data.product;
}

export { createProduct };
