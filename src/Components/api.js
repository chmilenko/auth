const url = process.env.REACT_APP_API_URL
export  async function registerUser (data) {
const response = await fetch(`${url}/register`, {
    method: "POST",
    body: data,
})
  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }
  return response.json();
}