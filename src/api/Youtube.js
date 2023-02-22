import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    // Authorization:
    //   "Bearer-AIzaSyDDBKtfLzYtGA1M854SeZ3YudPMfsIBdXE",
    Accept: "application/json",
  },
});
