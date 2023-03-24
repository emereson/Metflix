import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tvTopRaitedSlice = createSlice({
  name: "tv top",
  initialState: null,
  reducers: {
    setTopRaited: (state, action) => action.payload,
  },
});

export const { setTopRaited } = tvTopRaitedSlice.actions;

export default tvTopRaitedSlice.reducer;

export const getTvTopRaitedThunk =
  (page = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;

    axios
      .get(url)
      .then((res) => dispatch(setTopRaited(res.data)))
      .catch((err) => console.log(err.response));
  };
