import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const trendingSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    setTrending: (state, action) => action.payload,
  },
});

export const { setTrending } = trendingSlice.actions;

export default trendingSlice.reducer;

export const getTrendingThunk =
  (page = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;
    axios
      .get(url)
      .then((res) => dispatch(setTrending(res.data)))
      .catch((err) => console.log(err));
  };
