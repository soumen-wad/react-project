import './App.css';

import AboutPageComponent from './pages/AboutPageComponent';
import BlogsPageComponent from './pages/BlogsPageComponent';
import ContactPageComponent from './pages/ContactPageComponent';

import ProjectsPageComponent from './pages/ProjectsPageComponent';
import ServicesPageComponent from './pages/ServicesPageComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePageComponent from './pages/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="about" element={<AboutPageComponent />} />
          <Route path="services" element={<ServicesPageComponent />} />
          <Route path="projects" element={<ProjectsPageComponent />} />
          <Route path="blogs" element={<BlogsPageComponent />} />
          <Route path="contact" element={<ContactPageComponent />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
