const email = document.getElementById('E_mail');
const error = document.getElementById('Feed_back');
const form = document.getElementById('Form');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.id = 'Feed_back';
    error.textContent = 'Oh dear! Please Change Your e_mail to lower case! ☺️☺️';
  }
});