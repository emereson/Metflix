import { configureStore } from "@reduxjs/toolkit";
import moviePopulation from "./slices/moviePopulation.slice";
import seriePopulation from "./slices/seriePopulation.slice";
import trending from "./slices/trending.slice";
import tvTopRaited from "./slices/tvTopRaited.slice";
import movieTopRaited from "./slices/movieTopRaited.slice";
import searchAll from "./slices/searchAll.slice";
import movieNew from "./slices/movieNew.slice";

export default configureStore({
  reducer: {
    trending,
    moviePopulation,
    seriePopulation,
    tvTopRaited,
    movieTopRaited,
    searchAll,
    movieNew,
  },
});
