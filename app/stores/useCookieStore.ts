// stores/cookieStore.ts
import { create } from "zustand";
import Cookies from "js-cookie";

interface CookieState<T = any> {
  getCookie: (key: string) => T | null;
  setCookie: (key: string, value: T, days?: number) => void;
  removeCookie: (key: string) => void;
}

const useCookieStore = create<CookieState>((set) => ({
  getCookie: (key) => {
    const cookie = Cookies.get(key);
    return cookie ? JSON.parse(cookie) : null;
  },

  setCookie: (key, value, days = 7) => {
    Cookies.set(key, JSON.stringify(value), { expires: days });
  },

  removeCookie: (key) => {
    Cookies.remove(key);
  },
}));

export default useCookieStore;
