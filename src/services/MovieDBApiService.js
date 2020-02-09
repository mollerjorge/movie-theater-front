import axiosMovieApi from '../constants/axiosInstance'

export default class MovieDBApiService {
  constructor() {
    throw new Error('MovieDBApiService methods are static')
  }

  static list(resource, params) {
    return axiosMovieApi.get(`/${resource}`, {
      params: {
        ...params
      }
    })
  }

  static create(resource, data) {
    return axiosMovieApi.post(`/${resource}`, data)
  }

  static retrieve(resource, id) {
    return axiosMovieApi.get(`/${resource}/${id}`)
  }

  static update(resource, id, data) {
    return axiosMovieApi.put(`/${resource}/${id}`, data)
  }

  static delete(resource, id) {
    return axiosMovieApi.delete(`/${resource}/${id}`)
  }
}
