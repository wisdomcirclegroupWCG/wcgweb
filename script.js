// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement('button');
  toggle.innerText = '🌓';
  toggle.style.position = 'fixed';
  toggle.style.bottom = '20px';
  toggle.style.right = '20px';
  toggle.style.padding = '10px 15px';
  toggle.style.fontSize = '1.5rem';
  toggle.style.border = 'none';
  toggle.style.borderRadius = '50%';
  toggle.style.cursor = 'pointer';
  toggle.style.background = '#444';
  toggle.style.color = '#fff';
  toggle.title = 'Toggle Dark Mode';
  toggle.style.zIndex = '9999';

  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-target').forEach(el => observer.observe(el));
});
