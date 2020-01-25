import axios from 'axios';

const sendLogData = (logEndPoint, params) => axios
  .get(logEndPoint, { params });

export default sendLogData;
