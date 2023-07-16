const menuLinks = document.querySelectorAll('.menu__list__item a');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href');

      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      setTimeout(() => {
        overlay.classList.add('show-overlay');
        setTimeout(() => {
          overlay.remove();
        }, 500); 
      }, 50); 
    });
});