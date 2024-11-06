// Add event listeners and animations to the HTML elements
document.addEventListener('DOMContentLoaded', () => {
  // Search bar interactivity
  const searchInput = document.querySelector('.search-bar input');
  const searchIcon = document.querySelector('.search-bar i');

  searchInput.addEventListener('focus', () => {
    searchInput.classList.add('active');
    searchIcon.style.color = '#121212';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('active');
    searchIcon.style.color = '#fff';
  });

  // Card hover animations
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
    });
  });

  // Button hover animations
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = '#333';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = '#1E1E1E';
    });
  });
});