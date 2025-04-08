import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function makeRequest(url: string, options?: object) {
  try {
    const response = await api(url, options);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
