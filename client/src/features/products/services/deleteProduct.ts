import { API_URL } from "constants";

async function deleteProduct({
  shopId,
  productId,
}: {
  shopId?: string;
  productId: string;
}) {
  const res = await fetch(`${API_URL}/shops/${shopId}/products/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (res.ok) return;

  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }
}

export { deleteProduct };
