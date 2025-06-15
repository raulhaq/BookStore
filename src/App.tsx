import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookGallery from './components/BookGallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Sastra Book Store | Toko Buku Online Terpercaya';
    
    // Setup intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select all elements with animation classes
    const fadeElements = document.querySelectorAll('.fade-up, .book-card');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <BookGallery />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;