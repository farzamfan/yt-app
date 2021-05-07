import Axios from "axios";

const KEY = "AIzaSyBoh9H_ugKsvUyO-NVHOmvGJRLGpM1fQYQ";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
