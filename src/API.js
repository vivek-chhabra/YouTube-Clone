import { YT_KEY } from "./helpers";
import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyBK4Qk3UcRdq9XnLh2u3_Y64R5uz2ruy9I",
    },
});

export default request;
