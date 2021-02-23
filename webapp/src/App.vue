<template>
  <div id="movie-app" v-for="movie in results" :key="movie.id">
  <h4>Movie Title</h4>
  <h5>{{movie.title}}</h5>
  <h4>Movie Image</h4>
  <p>{{movie.backdrop_path}}</p>
  <h4>Movie Popularity</h4>
  <p>{{movie.vote_average}} / {{movie.vote_count}}</p>
  </div>
</template>
