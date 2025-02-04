import { API_URL } from "constants";

async function getMyShops() {
  //TODO: pass user id
  const res = await fetch(`${API_URL}/shops`, {
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
    

  return data.data.shops;
}

export { getMyShops };
