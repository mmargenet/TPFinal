const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  document.getElementById('contact-form').addEventListener('submit', sendForm);
  event.preventDefault();
});

function sendForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  event.preventDefault();
}
