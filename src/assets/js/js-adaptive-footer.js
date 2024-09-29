document.querySelectorAll('.footer__links-title, .footer__info-title, .footer__social-title').forEach(title => {
  title.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});