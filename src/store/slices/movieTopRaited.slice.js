import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const movieTopRaitedSlice = createSlice({
  name: "movie top",
  initialState: null,
  reducers: {
    setMovieTopRaited: (state, action) => action.payload,
  },
});

export const { setMovieTopRaited } = movieTopRaitedSlice.actions;
export default movieTopRaitedSlice.reducer;

export const getMovieTopRaited =
  (page = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;

    axios
      .get(url)
      .then((res) => dispatch(setMovieTopRaited(res.data)))
      .catch((err) => console.log(err));
  };
