import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "45c5c62205ff4e55915e335f37dd8cac",
  },
});

class apiClient<T> {
  endpoint:string;
  constructor(endpoint:string){
    this.endpoint = endpoint
  }
getAll = (config?:AxiosRequestConfig)=>{
return axiosInstance.get<FetchResponse<T>>(this.endpoint, config ).then(res=>res.data)
}
  

}

export default apiClient


