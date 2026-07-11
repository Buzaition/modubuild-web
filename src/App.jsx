import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Studio3D from './pages/Studio3D';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Materials from './pages/Materials';
import Quote from './pages/Quote';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import SplashScreen from './components/ui/SplashScreen';
import ScrollToTop from './components/ui/ScrollToTop';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SplashScreen />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="3d-studio" element={<Studio3D />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="materials" element={<Materials />} />
          <Route path="quote" element={<Quote />} />
          <Route path="client-dashboard" element={<ClientDashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
