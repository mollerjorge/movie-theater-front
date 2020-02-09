import https from 'https'
import axios from 'axios'
import applyConverters from 'axios-case-converter'

const axiosMovieAPI = applyConverters(axios.create({
  baseURL: process.env.REACT_APP_MOVIEDB_API,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_TOKEN}`
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}))

axiosMovieAPI.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage = error?.response?.data?.statusMessage
    const httpError = new Error(errorMessage)
    return Promise.reject(httpError);
  }
);

export default axiosMovieAPI
