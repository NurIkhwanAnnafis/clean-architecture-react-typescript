import Axios from "axios";
import { api } from "../Config/keys";

const networkService = Axios.create({
  baseURL: api.BASE_URL,
  timeout: 20000,
  headers: {
    'content-type': 'aaplication/json'
  }
})

networkService.interceptors.request.use(
  // for custom header request
  config => config,
  error => Promise.reject(error),
)

networkService.interceptors.response.use(
  res => res.data,
  error => {
    const { status } = error.response;

    if (status === 401) {/* */}
    else if (status >= 400) {/* */}
    else if (status >= 500) {/* */}

    return Promise.reject(error);
  }
)

export default networkService;