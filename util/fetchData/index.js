import fetch from "node-fetch";

export const fetchData = async (endpoint) => {
  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.TMDB_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchPageData = async (endpoint, page = 1) => {
  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
