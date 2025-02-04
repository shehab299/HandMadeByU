import { CreatedShop } from "@types";
import { API_URL } from "constants";

async function createShop(shop: CreatedShop) {
  const res = await fetch(`${API_URL}/shops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name: shop?.name, description: shop?.description }),
  });
  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export { createShop };
