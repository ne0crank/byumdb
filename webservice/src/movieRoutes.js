import findMovie from './movieApi';

const movieRoutes = (app) => {

  app.post('/movie/:movieId', (req, res) => {
    console.log('[GET] /movie/:movieId');
    const title = req.body.conversation.memory['title'];

    return searchMovie(title)
      .then((carouselle) => {
        res.json({
          replies: carouselle,
          conversation: {
          }
        });
      })
      .catch((err) => {
        console.error('movieApi::searchMovie error: ', err);
      });
  });
}

export default movieRoutes;
