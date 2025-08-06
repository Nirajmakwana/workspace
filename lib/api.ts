import axios from 'axios';
const API_KEY = '1757ff7a';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (
  query: string,
  page = 1,
  type?: string,
  year?: string
) => {
  const res = await axios.get(BASE_URL, {
    params: {
      s: query,
      page,
      type,
      y: year,
      apikey: API_KEY,
    },
  });
  return res.data;
};

export const getMovieDetails = async (id: string) => {
  const res = await axios.get(BASE_URL, {
    params: {
      i: id,
      plot: 'full',
      apikey: API_KEY,
    },
  });
  return res.data;
};
