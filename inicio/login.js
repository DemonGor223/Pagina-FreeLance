document.addEventListener('DOMContentLoaded', () => {
    // Toggle between login and register forms
    const loginLink = document.querySelector('.login-Link');
    const registerLink = document.querySelector('.register-Link');
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
  
    loginLink.addEventListener('click', () => {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });
  
    registerLink.addEventListener('click', () => {
      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
    });
  
    // Input field animations
    const inputBoxes = document.querySelectorAll('.input-box');
  
    inputBoxes.forEach(inputBox => {
      const input = inputBox.querySelector('input');
      const label = inputBox.querySelector('label');
  
      input.addEventListener('focus', () => {
        label.style.top = '-5px';
        inputBox.style.borderColor = '#fff';
      });
  
      input.addEventListener('blur', () => {
        if (input.value === '') {
          label.style.top = '50%';
          inputBox.style.borderColor = '#fff';
        }
      });
    });
  
    // Navigation link hover animations
    const navigationLinks = document.querySelectorAll('.navigation a');
  
    navigationLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = '#fff';
        link.style.transform = 'translateY(-2px)';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = '#fff';
        link.style.transform = 'translateY(0)';
      });
    });
  });