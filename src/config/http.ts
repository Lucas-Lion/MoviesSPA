import axios from "axios";

export const moviesApis = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTZkZGVjMWQxOGYxMjZjZTAxNjYzYzc1Y2Q2NGViZCIsIm5iZiI6MTc3MTUyMDI5NS41OTgsInN1YiI6IjY5OTc0MTI3OTEzNWY1NTNmYTNjOTMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl7np07QLhhYouab_njr08v2ZdpFSfev22BqyMijjx4`
  }
});