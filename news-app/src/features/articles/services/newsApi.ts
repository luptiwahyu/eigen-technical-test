import axios from 'axios'
import type { Article } from '../models/Article'

const API_KEY = 'd83f21df5fa343eca29716e849f055ae'
const BASE_URL = 'https://newsapi.org/v2/top-headlines'

export const fetchArticles = async (): Promise<Article[]> => {
  const url = `${BASE_URL}?apiKey=${API_KEY}&country=us&category=technology&pageSize=10`
  const response = await axios.get(url)
  return response.data.articles
}
