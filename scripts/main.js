/**
 * Miel Doña Carolina - Scripts interactivos de la Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Manejo del Menú Móvil (Abrir / Cerrar con animación suave)
  const menuButton = document.getElementById('mobile-menu-btn');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuButton && mobileMenu) {
    const toggleMenu = (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains('menu-open');
      if (isOpen) {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        if (menuIcon) menuIcon.textContent = 'menu';
      } else {
        mobileMenu.classList.remove('menu-closed');
        mobileMenu.classList.add('menu-open');
        if (menuIcon) menuIcon.textContent = 'close';
      }
    };

    menuButton.addEventListener('click', toggleMenu);

    // Cerrar al hacer clic en un enlace del menú
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        if (menuIcon) menuIcon.textContent = 'menu';
      });
    });

    // Cerrar al hacer clic en cualquier parte fuera del menú
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        if (mobileMenu.classList.contains('menu-open')) {
          mobileMenu.classList.remove('menu-open');
          mobileMenu.classList.add('menu-closed');
          if (menuIcon) menuIcon.textContent = 'menu';
        }
      }
    });
  }

  // 2. Año dinámico en el pie de página
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. Scrollspy: Resaltar la sección activa en la barra de navegación
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-honey-gold');
          link.classList.add('text-on-surface-variant');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-honey-gold');
            link.classList.remove('text-on-surface-variant');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);
});
