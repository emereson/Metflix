import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const searchAllSlice = createSlice({
  name: "search all",
  initialState: null,
  reducers: {
    setSearchAll: (state, action) => action.payload,
  },
});

export const { setSearchAll } = searchAllSlice.actions;
export default searchAllSlice.reducer;

export const getSearchAllThunk =
  (id = "") =>
  (dispatch) => {
    const url = `https://api.themoviedb.org/3/find/100088?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&external_source=${id}`;

    axios
      .get(url)
      .then((res) => dispatch(setSearchAll(res.data)))
      .catch((err) => console.log(err));
  };
