import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogIndex from './pages/Blog/BlogIndex';
import BlogPost from './pages/Blog/BlogPost';
import ServicesIndex from './pages/ServicesIndex';
import ProjectDetails from './pages/ProjectDetails';
import DistrictsIndex from './pages/DistrictsIndex';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:id" element={<ProjectDetails />} />
        <Route path="districts" element={<DistrictsIndex />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}
