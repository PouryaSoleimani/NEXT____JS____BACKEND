import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://localhost:4000/api/v1'
})
export default Axios