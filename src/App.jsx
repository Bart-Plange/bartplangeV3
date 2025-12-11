import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { PortfolioPage, Resume, AboutPage, ContactPage, ExperiencePage, ProjectDetailPage } from './pages';
import { CustomCursor, Layout } from './components';
function App() {
  return (
    <>
      <Router>
        <Layout >
          <CustomCursor />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/work' element={<PortfolioPage />} />
            <Route path='/work/:id' element={<ProjectDetailPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
