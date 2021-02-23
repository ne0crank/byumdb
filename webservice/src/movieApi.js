import axios from 'axios';
import config from '../config';

const searchMovie = (title) => {
  return moviedbApiCall(title)
    .then(response =>
    apiResultToCarousselle(response.data.results)
  );
}

const moviedbApiCall = (title) => {
  return axios.get(`${config.tmdbURL}/${title}`, {
    params: {
      api_key: config.MOVIEDB_TOKEN,
      sort_by: 'popularity.desc',
      include_adult: false,
    },
  });
}

const apiResultToCarousselle = (results) => {
  if (results.length === 0) {
    return [
      {
        type: 'quickReplies',
        content: {
          title: 'Sorry, but I could not find any results for your request :(',
          buttons: [{ title: 'Start over', value: 'Start over' }],
        },
      },
    ];
  }

  const cards = results.slice(0, 10).map(e => ({
    title: e.title || e.name,
    subtitle: e.overview,
    imageUrl: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`,
    buttons: [
      {
        type: 'web_url',
        value: `https://www.themoviedb.org/movie/${e.id}`,
        title: 'View More',
      },
    ],
  }));

  return [
    {
      type: 'text',
      content: "Here's what I found for you!",
    },
    { type: 'carousel', content: cards },
  ];
}

module.exports = {
  searchMovie,
};
