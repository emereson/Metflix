import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const moviePopulationSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    setMoviePopulation: (state, action) => action.payload,
  },
});

export const { setMoviePopulation } = moviePopulationSlice.actions;

export default moviePopulationSlice.reducer;

export const getMoviePopulationThunk =
  (page = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;
    axios
      .get(url)
      .then((res) => dispatch(setMoviePopulation(res.data)))
      .catch((err) => console.log(err));
  };
