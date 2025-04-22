import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "45c5c62205ff4e55915e335f37dd8cac",
  },
});
