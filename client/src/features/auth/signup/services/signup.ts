import { API_URL } from "constants";

async function signup(credentials: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
}) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }
  return data.data;
}

export { signup };
