import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies'
import Series from './components/pages/Series'
import Trends from './components/pages/Trends'
import MovieInfo from './components/pages/MovieInfo'
import Header from './components/shared/Header'
import Search from './components/pages/Search'
import Loader from './components/pages/Loader'

function App() {
  return (
    <div>
      <Loader />
      <Header />
      <MovieInfo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/trends' element={<Trends />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
      </Routes >
    </div >

  )
}

export default App
