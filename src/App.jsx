import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoviePage from "./pages/MoviePage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/movies/:id' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
