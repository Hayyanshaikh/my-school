import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../utils/constant";
import useCookieStore from "../stores/useCookieStore";
import useAuthStore from "../stores/useAuthStore";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const { getCookie } = useCookieStore.getState();
  const cookieToken = getCookie("access_token");
  if (cookieToken) {
    config.headers.Authorization = `Bearer ${cookieToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const { logout } = useAuthStore.getState();
      const { removeCookie } = useCookieStore.getState();
      localStorage.removeItem("access_token");
      removeCookie("access_token");
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return instance(config).then((res) => res.data);
};
