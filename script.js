/* ============================================================
   script.js — Dunsin Bankole Portfolio
   Interactions, Animations, Scroll FX
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------------
  // 0. LOADER DISMISS
  // ----------------------------------------------------------------
  const loader = document.getElementById('loader');
  const dismissLoader = () => {
    if (loader) loader.classList.add('hidden');
  };
  // Hide after fonts + images settle
  if (document.readyState === 'complete') {
    setTimeout(dismissLoader, 600);
  } else {
    window.addEventListener('load', () => setTimeout(dismissLoader, 600));
  }
  // Safety fallback
  setTimeout(dismissLoader, 2500);

  // ----------------------------------------------------------------
  // 1. NAV SCROLL EFFECT
  // ----------------------------------------------------------------
  const nav = document.getElementById('main-nav');
  const updateNav = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ----------------------------------------------------------------
  // 2. ACTIVE NAV LINK HIGHLIGHTING
  // ----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active-nav');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-nav');
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // Inject active nav style
  const navStyle = document.createElement('style');
  navStyle.textContent = `.nav-links a.active-nav { color: var(--neon-green) !important; }`;
  document.head.appendChild(navStyle);

  // ----------------------------------------------------------------
  // 3. SCROLL REVEAL (Intersection Observer)
  // ----------------------------------------------------------------
  const revealEls = document.querySelectorAll(
    '.project-card, .career-card, .timeline-item, .player-card, .about-text, .stat-item, .formation-card, .contact-left, .contact-right, .section-header'
  );

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 80}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ----------------------------------------------------------------
  // 4. STAT COUNTER ANIMATION
  // ----------------------------------------------------------------
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  const countUp = (el) => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '+';
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, stepTime);
  };

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));

  // ----------------------------------------------------------------
  // 5. PROJECT FILTER
  // ----------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach((card, i) => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.style.display = '';
          card.style.animationDelay = `${(i % 4) * 60}ms`;
          // Trigger re-reveal
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ----------------------------------------------------------------
  // 6. PLAYER CARD 3D TILT
  // ----------------------------------------------------------------
  const playerCard = document.getElementById('player-card');
  if (playerCard) {
    playerCard.addEventListener('mousemove', (e) => {
      const rect = playerCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;
      playerCard.style.transform = `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    playerCard.addEventListener('mouseleave', () => {
      playerCard.style.transform = '';
      playerCard.style.transition = 'transform 0.5s ease';
    });

    playerCard.addEventListener('mouseenter', () => {
      playerCard.style.transition = 'transform 0.1s ease';
    });
  }

  // ----------------------------------------------------------------
  // 7. SCROLL CUE CLICK
  // ----------------------------------------------------------------
  const scrollCue = document.getElementById('hero-scroll-cue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ----------------------------------------------------------------
  // 8. PITCH SVG CURSOR TRAIL
  // ----------------------------------------------------------------
  const pitchSvg = document.getElementById('pitch-svg');
  if (pitchSvg) {
    const hero = document.getElementById('hero');
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      // Subtle parallax on pitch
      pitchSvg.style.transform = `scale(1.03) translate(${(x - 50) * -0.05}%, ${(y - 50) * -0.05}%)`;
    });

    hero.addEventListener('mouseleave', () => {
      pitchSvg.style.transform = '';
    });
  }

  // ----------------------------------------------------------------
  // 9. SHOOT BUTTON ANIMATION
  // ----------------------------------------------------------------
  const shootBtn = document.getElementById('shoot-btn');
  if (shootBtn) {
    shootBtn.addEventListener('click', (e) => {
      // Create ball burst effect
      createBurst(e.clientX, e.clientY);
    });
  }

  function createBurst(x, y) {
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 2rem;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      animation: burstAnim 0.8s ease forwards;
    `;
    burst.textContent = '⚽';
    document.body.appendChild(burst);

    const burstStyle = document.createElement('style');
    burstStyle.textContent = `
      @keyframes burstAnim {
        0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -200%) scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(burstStyle);
    setTimeout(() => { burst.remove(); burstStyle.remove(); }, 800);
  }

  // ----------------------------------------------------------------
  // 10. FORMATION DOT HOVER LABELS
  // ----------------------------------------------------------------
  const formDots = document.querySelectorAll('.form-dot');
  const dotLabels = {
    'UX': 'User Experience',
    'UI': 'User Interface',
    'VIS': 'Visual Design',
    'BRD': 'Brand Identity',
    'MOT': 'Motion Design',
    'GK': 'Creative Direction',
    '10': 'Dunsin Bankole',
  };

  formDots.forEach(dot => {
    const key = dot.textContent.trim();
    if (dotLabels[key]) {
      dot.title = dotLabels[key];
    }
  });

  // ----------------------------------------------------------------
  // 11. STAGGERED CAREER CARD ANIMATION
  // ----------------------------------------------------------------
  const careerCards = document.querySelectorAll('.career-card');
  careerCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 120}ms`;
  });

  // ----------------------------------------------------------------
  // 12. ACTIVE NAV STYLE INJECTION
  // ----------------------------------------------------------------
  const extraStyles = document.createElement('style');
  extraStyles.textContent = `
    .nav-links a { position: relative; }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 2px; left: 50%;
      width: 0; height: 2px;
      background: var(--neon-green);
      border-radius: 2px;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }
    .nav-links a:hover::after,
    .nav-links a.active-nav::after { width: 60%; }
  `;
  document.head.appendChild(extraStyles);

  // ----------------------------------------------------------------
  // 13. TICKER PAUSE ON HOVER
  // ----------------------------------------------------------------
  const ticker = document.querySelector('.ticker-track');
  if (ticker) {
    ticker.addEventListener('mouseenter', () => {
      ticker.style.animationPlayState = 'paused';
    });
    ticker.addEventListener('mouseleave', () => {
      ticker.style.animationPlayState = 'running';
    });
  }

  // ----------------------------------------------------------------
  // 14. PROJECT CARD HOVER SOUND INDICATOR
  // ----------------------------------------------------------------
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.setProperty('--hover-glow', '1');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--hover-glow', '0');
    });
  });

  // ----------------------------------------------------------------
  // 15. SMOOTH ANCHOR SCROLL for nav links
  // ----------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('%c⚽ DESIGN FC — Dunsin Bankole Portfolio', 
    'color: #39ff6e; font-size: 16px; font-weight: bold; background: #0a1a10; padding: 8px 16px; border-radius: 4px;');

});
