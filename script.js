
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 👈 ensures it only happens once
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    observer.observe(elem);
  });
  document.querySelectorAll('.animate-on-scroll-right').forEach(elem => {
    observer.observe(elem);
  });
  document.querySelectorAll('.animate-on-scroll-top').forEach(elem => {
    observer.observe(elem);
  });
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const card = question.parentElement;
    card.classList.toggle('active');
  });
});
