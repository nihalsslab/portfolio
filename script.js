 // Set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Build the projects grid from a JS array
    const projects = [
      "College 360 View WebApp","Futurinx Website","Projecx Website","SSLab Website","College Management System","Shopping Website","Cerebra Connect Website","Portfolios-1 ","Portfolio-2","Portfolio-3","College Arts Website","Blind Vision Glass","Reues – Reuse Book Platform","InfizenAdventures (Traveling Website)","GOURMETIFY – Shopping Website"
    ];
    const images = [
      "images/project/1.png",
      "images/project/2.png",
      "images/project/3.png",
      "images/project/4.png",
      "images/project/5.png",
      "images/project/6.png",
      "images/project/7.webp",
      "images/project/8.webp",
      "images/project/9.webp",
      "images/project/10.webp",
      "images/project/11.jpg",
      "images/project/12.jpg",
      "images/project/13.png",
      "images/project/14.png",
      "images/project/15.png",
    ];


    const grid = document.getElementById('projects-grid');
    const tpl = document.getElementById('project-card-template');
    projects.forEach((t, i) => {
      const node = tpl.content.cloneNode(true);
      node.querySelector('.p-title').textContent = t;
      node.querySelector('.p-image').src = images[i];
      grid.appendChild(node);
    });

    // Simple contact form handler (demo-only; replace with your backend)
    document.getElementById('contact-form').addEventListener('submit', function(e){
      e.preventDefault();
      const form = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      const out = document.getElementById('form-status');
      out.textContent = `Thanks, ${data.name}! Your message has been captured locally. Connect via email to proceed.`;
      form.reset();
    });

    // Fade-up on scroll (progressive enhancement)
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight - 80;
    };
    const els = [...document.querySelectorAll('.fade-up')];
    const tick = () => {
      els.forEach(el => { if(inView(el)) el.style.animationPlayState = 'running'; });
    };
    window.addEventListener('scroll', tick, {passive:true});
    window.addEventListener('load', tick);

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', !expanded);
      navLinks.style.display = expanded ? 'none' : 'flex';
    });
    navToggle.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        navToggle.click();
      }
    });
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768) {
        navLinks.style.display = '';
        navToggle.setAttribute('aria-expanded', false);
      }
    });
