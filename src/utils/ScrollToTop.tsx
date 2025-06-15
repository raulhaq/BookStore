import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    // Button to scroll to top
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    `;
    scrollButton.className = 'fixed bottom-6 right-6 p-2 bg-indigo-600 text-white rounded-full shadow-lg z-50 opacity-0 transition-opacity duration-300';
    scrollButton.style.display = 'none';
    
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(scrollButton);
    
    const toggleScrollButton = () => {
      if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
        setTimeout(() => {
          scrollButton.style.opacity = '1';
        }, 50);
      } else {
        scrollButton.style.opacity = '0';
        setTimeout(() => {
          scrollButton.style.display = 'none';
        }, 300);
      }
    };
    
    window.addEventListener('scroll', toggleScrollButton);
    
    return () => {
      window.removeEventListener('scroll', toggleScrollButton);
      document.body.removeChild(scrollButton);
    };
  }, []);

  return null;
};

export default ScrollToTop;