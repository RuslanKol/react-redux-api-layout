import axios from "axios";

export function getArea() {
  return axios.post("http://18.191.41.196:3001/provider/getAreas");
}