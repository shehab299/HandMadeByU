import { API_URL } from "constants";

async function getShops({ id }: { id?: string } = {}) {
  // Construct the URL based on whether `id` is provided
  const url = id ? `${API_URL}/shops/${id}` : `${API_URL}/shops`;

  const res = await fetch(url, {
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

  // Return the appropriate data based on whether `id` is provided
  return id ? data.data.shop : data.data.shops;
}

export { getShops };
