import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import quote from 'inspirational-quotes';
import cors from 'cors';

const webService = express();


// bodyParser
webService.use(bodyParser.urlencoded({ extended: true }));
webService.use(bodyParser.json());

webService.get('/', (req,res) =>{
  res.send(quote.getQuote());
  console.log('[GET] / (quote)');
});

const searchMovie = movieId => {
  console.log('[GET] /movie/:movieId');
  return webService.get(`/movie/:${movieId}`)
    .then(resp => resp.data)
    .catch((err) => {
        console.error('movieApi::searchMovie error: ', err);
  });
};

webService.get('/movie', (req,res) => {
  res.send(SearchMovie(config.sampleId));
});

webService.post('/errors', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

webService.listen(config.port, () =>
  console.info(`Express server is running on port ${config.port}`)
);
