import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d76bbd711a614ab394a820f4ee6b1a0c",
  },
});
