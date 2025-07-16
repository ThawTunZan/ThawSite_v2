import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import ProjectDetails from './pages/ProjectDetails';
import Modules from './pages/Modules'
import ModuleDetails from './pages/ModuleDetails';

function App() {
  return (
    <>
      <Helmet>
        <title>Thaw Tun Zan - Portfolio</title>
        <meta name="description" content="Computer Engineering Student Portfolio - Thaw Tun Zan" />
      </Helmet>
      
      <div className="min-h-screen bg-primary-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/:id" element={<ModuleDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App 