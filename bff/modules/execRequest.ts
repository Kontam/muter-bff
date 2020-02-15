import BffConst from '../const';
import axios from 'axios';
const apiBaseUrl = BffConst.API_BASE_URL;

// const axiosBase = require('axios');
// const axios = axiosBase.create({
//   baseURL: apiBaseUrl,
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   },
//   responseType: 'json'
// })

const execRequest = <T>(slug :string, params :any) =>
  axios.get<T>(apiBaseUrl + slug, params).then((data) => {
    return data;
  });

export default execRequest;
