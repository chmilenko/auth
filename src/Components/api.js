const url = process.env.REACT_APP_API_URL
console.log(url);
export  async function registerUser (data) {
const response = await fetch(`${url}/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
})
  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }
  return response.json();
}