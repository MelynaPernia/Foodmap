$(document).ready(function() {
  // animación del titulo
  $('.title').animate({
    marginBottom: '5in',
    color: '#f0dc5b'
  }, 5000);
  // animación del logo
  $('.logo').animate({
    opacity: 0,
    marginBottom: '5in'
  }, 5000);
  // mostrar la vista main después de cinco segundos
  setTimeout(function() {
    window.location.href = 'views/main.html';
  }, 5000);
});
