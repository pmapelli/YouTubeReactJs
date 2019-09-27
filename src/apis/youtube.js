import axios from "axios";

// const KEY = "AIzaSyDWWwN7AVUwfvFVzj3v23IQmfrjgRv2kCo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
  // ,
  // params: {
  //   key: KEY,
  //   part: "snippet",
  //   maxResults: 5
  // }
});
