import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MovieInfo from '../pages/MovieInfo'
import Movies from '../pages/Movies'
import Search from '../pages/Search'
import SerieInfo from '../pages/SerieInfo'
import Series from '../pages/Series'
import Trends from '../pages/Trends'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/movie/info/:id' element={<MovieInfo />} />
          <Route path='/serie/info/:id' element={<SerieInfo />} />
        </Routes>
      </header>

    </div>

  )
}

export default App
