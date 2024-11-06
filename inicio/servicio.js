document.addEventListener('DOMContentLoaded', () => {
    // Circle hover animations
    const circles = document.querySelectorAll('.circulo');
  
    circles.forEach(circle => {
      circle.addEventListener('mouseenter', () => {
        circle.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        circle.style.transform = 'scale(1.05)';
      });
  
      circle.addEventListener('mouseleave', () => {
        circle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        circle.style.transform = 'scale(1)';
      });
    });
  
    // Navigation link hover animations
    const navigationLinks = document.querySelectorAll('.navegacion a');
  
    navigationLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
    });
  });