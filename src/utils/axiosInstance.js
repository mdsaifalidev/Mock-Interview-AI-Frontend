import axios from "axios"
// base url
const BASE_URL = "https://mock-interview-ai-backend.vercel.app/api/v1"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export default axiosInstance
