const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = (message) => {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  tmdbUrl: 'https://api.themoviedb.org/3/search/',
  sampleId: '9502',
  MOVIEDB_TOKEN: process.env.MOVIEDB_TOKEN || '9422ed37b493db7792378669acc9caa8',
  port: env.PORT || 4000,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
