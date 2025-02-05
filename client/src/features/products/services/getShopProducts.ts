import { API_URL } from "constants";

async function getShopProducts({ shopId }: { shopId?: string }) {
  const res = await fetch(`${API_URL}/shops/${shopId}/products`, {
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

  return data.data.products;
}

export { getShopProducts };
