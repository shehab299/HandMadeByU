import { API_URL } from "constants";

async function getProduct({
  shopId,
  productId,
}: {
  shopId?: string;
  productId: string;
}) {
  const res = await fetch(`${API_URL}/shops/${shopId}/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data.product;
}

export { getProduct };
