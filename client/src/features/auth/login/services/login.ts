const API_URL = import.meta.env.VITE_API_URL;

async function login({ email, password }: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }
  return data.data;
}

export { login };
