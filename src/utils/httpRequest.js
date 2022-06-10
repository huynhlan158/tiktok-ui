import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export default httpRequest;
export { get };
