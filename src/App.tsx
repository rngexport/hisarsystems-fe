import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import RnD from './pages/RnD';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sectors from './pages/Sectors';
import RoboticLines from './pages/details/RoboticLines';
import FactorySmart from './pages/details/FactorySmart';
import ScadaCommand from './pages/details/ScadaCommand';
import { ScrollToTop } from './components/ScrollToTop';
import ServiceDetail from './pages/details/services/ServiceDetail';
import SectorDetail from './pages/details/sectors/SectorDetail';
import TechnologyDetail from './pages/details/technologies/TechnologyDetail';
import ProjectDetail from './pages/details/projects/ProjectDetail';
import BlogDetail from './pages/details/blog/BlogDetail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/sectors/:slug" element={<SectorDetail />} />
          <Route path="/technologies/:slug" element={<TechnologyDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/details/robotic" element={<RoboticLines />} />
          <Route path="/details/factory" element={<FactorySmart />} />
          <Route path="/details/scada" element={<ScadaCommand />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
