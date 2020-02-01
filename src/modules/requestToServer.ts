import axios, { AxiosResponse } from 'axios';

const requestToServer = <T>(endpoint:string, params = {}):Promise<void | {data: T, status:number}> => {
  return axios
  .get(endpoint, params)
  .then((result: AxiosResponse<T>) => {
    const { data, status } = result;
    return { data, status };
  })
  .catch((error) => {
    console.log()
  });
}

export default requestToServer;
