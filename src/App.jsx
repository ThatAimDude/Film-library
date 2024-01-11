import './App.css'
import Homescreen from './screens/HomeScreen'
import MovieDetails from './screens/MovieDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
      <Routes>
        <Route path="/" element={<Homescreen/>} />
        <Route path="/movie/:movieId" element={<MovieDetails/>}/>
      </Routes>
  )
}

export default App
