import { opFetch } from "../Hooks/opFetch";
export  async function registerUser (data) {
  const headers = new Headers()
  headers.set("Content-Type", "application/json")
  headers.set("Accept", "application/json");

const response = await opFetch('/register', {
    method: "POST",
    body: JSON.stringify(data),
})
  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }
  return response.json();
}
export async function authorization (data) {
  const headers = new Headers()
  headers.set("Content-Type", "application/json")
  headers.set("Accept", "application/json");

const response = await opFetch('/token', {
    method: "POST",
    body: JSON.stringify(data),
})
  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }
  return response.json();
}