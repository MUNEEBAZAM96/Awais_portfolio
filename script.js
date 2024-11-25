document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.name-text');
  const roleElement = document.querySelector('.role-text');
  const heroText = document.querySelector('.hero-text');
  
  const name = "Awais Ali";
  const role = "Math Enthusiast & Entrepreneur";
  
  // Typing effect function
  async function typeText(element, text, speed = 100) {
    element.classList.add('typing');
    for (let char of text) {
      element.textContent += char;
      await new Promise(resolve => setTimeout(resolve, speed));
    }
    element.classList.remove('typing');
  }

  // Sequential animation
  async function animateHeroContent() {
    // Type name
    await typeText(nameElement, name, 150);
    
    // Small pause
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Type role
    await typeText(roleElement, role, 100);
    
    // Fade in description
    await new Promise(resolve => setTimeout(resolve, 400));
    heroText.classList.add('fade-in');
  }

  // Start the animation
  animateHeroContent();

  // Intersection Observer for about section
  const aboutSection = document.querySelector('.about-content');
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        aboutObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  

  aboutObserver.observe(aboutSection);

  // Add hover effect for icons
  const icons = document.querySelectorAll('.abs-icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.animation = 'none';
      setTimeout(() => {
        icon.style.animation = 'float 3s ease-in-out infinite';
      }, 10);
    });
  });
});
