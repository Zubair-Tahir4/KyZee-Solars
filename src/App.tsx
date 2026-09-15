/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingSocialBar } from './components/FloatingSocialBar';
import { Footer } from './components/Footer';

// 4 Distinct Pages per user specification
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';

// Scroll Restoration helper on page route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000] text-slate-100 flex flex-col selection:bg-[#F58220]/30 selection:text-white relative">
        {/* 
          GLOBAL FLOATING SOCIAL & CONTACT WIDGETS:
          - Positioned on the RIGHT SIDE
          - Initially hidden when at page top
          - Smoothly reveals and pins to right side as user scrolls down
        */}
        <FloatingSocialBar />

        {/* Global Consistent Navigation Bar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <div className="flex-grow">
          <Routes>
            {/* 1. Home Page (Landing Page) */}
            <Route path="/" element={<HomePage />} />

            {/* 2. About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* 3. Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 4. Projects Page (4 Interactive Categories) */}
            <Route path="/projects" element={<ProjectsPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Consistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}
