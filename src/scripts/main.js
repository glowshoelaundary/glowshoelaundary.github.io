// Modern Javascript for interactivity and performance
console.log('Glow Shoe Laundry Modern App Initialized');

// Simple mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const toggle = document.createElement('button');
    toggle.innerHTML = '☰';
    toggle.style.cssText = `
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary);
  `;

    // Only show on mobile (update via CSS media query ideally, but JS for now)
    if (window.innerWidth <= 768) {
        toggle.style.display = 'block';
        document.querySelector('.nav-content').insertBefore(toggle, nav);

        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '80px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = 'white';
            nav.style.padding = '1rem';
            nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    }
});
