import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const movieNewSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    setMovieNew: (state, action) => action.payload,
  },
});

export const { setMovieNew } = movieNewSlice.actions;

export default movieNewSlice.reducer;

export const getMovieNewThunk = () => (dispatch) => {
  const url = `https://api.themoviedb.org/3/movie/latest?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES`;
  axios
    .get(url)
    .then((res) => dispatch(setMovieNew(res.data)))
    .catch((err) => console.log(err));
};
