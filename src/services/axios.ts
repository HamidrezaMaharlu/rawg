import axios from "axios";
import {BASE_URL} from "../config/urlConfig";

export const Axios = axios.create({
    baseURL:BASE_URL,
    headers:{
        key:"8fbd573cf0514effb4580699e7ccf169"
    }
})

