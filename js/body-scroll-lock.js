mobileOpen.addEventListener('click', () => {
    menuBox.classList.add('active');
    document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
    menuBox.classList.remove('active');
    document.body.style.overflow = '';
});