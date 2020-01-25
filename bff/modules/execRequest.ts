import BffConst from '../const';
const apiBaseUrl = BffConst.API_BASE_URL;

const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

const execRequest = (slug :string, params :any): any =>
  axios.get(slug, params).then((data:any):any => {
    return data;
  });

export default execRequest;
