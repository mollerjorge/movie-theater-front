import https from 'https'
import axios from 'axios'

const axiosMovieAPI = axios.create({
  baseURL: process.env.REACT_APP_MOVIEDB_API,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_TOKEN}`
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

export default axiosMovieAPI
