
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById('openContactPanel');
  const closeBtn = document.getElementById('closeContactPanel');
  const panel = document.getElementById('contactPanel');

  openBtn.addEventListener('click', () => {
    panel.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('show');
  });
});
