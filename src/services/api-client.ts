import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ed81e29786ef4273acdc11a9311c4f93",
  },
});
