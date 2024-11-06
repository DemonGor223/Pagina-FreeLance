document.addEventListener('DOMContentLoaded', () => {
    // Navigation link hover animations
    const navigationLinks = document.querySelectorAll('.nav-links a');
  
    navigationLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
    });
  
    // Sidebar button hover animations
    const sidebarButtons = document.querySelectorAll('.sidebar-buttons button');
  
    sidebarButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        button.style.backdropFilter = 'blur(5px)';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#007BFF';
        button.style.backdropFilter = 'none';
      });
    });
  
    // Search bar interactivity
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');
  
    searchInput.addEventListener('focus', () => {
      searchInput.style.backgroundColor = 'white';
      searchInput.style.color = 'black';
    });
  
    searchInput.addEventListener('blur', () => {
      searchInput.style.backgroundColor = 'transparent';
      searchInput.style.color = 'white';
    });
  });