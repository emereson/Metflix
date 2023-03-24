import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const seriePopulationSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    setSeriePopulation: (state, action) => action.payload,
  },
});

export const { setSeriePopulation } = seriePopulationSlice.actions;

export default seriePopulationSlice.reducer;

export const getSeriePopulationThunk =
  (page = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;
    axios
      .get(url)
      .then((res) => dispatch(setSeriePopulation(res.data)))
      .catch((err) => console.log(err));
  };
