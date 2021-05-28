import axios from "axios";
import { baseURL } from "../configs";

export default axios.create({
  baseURL,
});
