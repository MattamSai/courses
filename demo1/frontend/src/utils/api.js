import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const originalRequest = error.config
        if (!originalRequest.retryRequest && error?.response?.status=== '401') {
            originalRequest.retryRequest=true
            try {
                await api.post("/auth/refresh");
                return api(originalRequest)
            } catch {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    },
);
