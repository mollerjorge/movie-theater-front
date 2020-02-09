import { MovieType } from './Movie'

export type MovieListResponseType = {
  page: number
  totalResults: number
  totalPages: number
  results: MovieType[]
}
