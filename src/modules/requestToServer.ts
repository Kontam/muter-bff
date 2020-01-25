import axios from 'axios';

const requestToServer = (endpoint:string, params = {}) => {
  console.log(endpoint);
  return axios
  .get(endpoint, params)
  .then((result) => {
    const { data, status } = result;
    return { data, status };
  });
}

export default requestToServer;
