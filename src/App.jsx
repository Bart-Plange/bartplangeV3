import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { PortfolioPage } from './pages';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
