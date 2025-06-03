import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { PortfolioPage } from './pages';
import { CustomCursor } from './components';
function App() {
  return (
    <>
      <Router>
        <CustomCursor />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
