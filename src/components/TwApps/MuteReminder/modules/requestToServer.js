import axios from 'axios';

const requestToServer = (endpoint, params = {}) => axios
  .get(endpoint, params)
  .then((result) => {
    const { data, status } = result;
    return { data, status };
  });

export default requestToServer;
