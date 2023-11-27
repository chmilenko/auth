import Cookies from "js-cookie";

export function setTokenInCookie(token) {
    // Токен будет храниться в куках в течение 7 дней
    Cookies.set("token", token, { expires: 7 }); 
  }

  export function getTokenFromCookie() {
    return Cookies.get("token");
  }