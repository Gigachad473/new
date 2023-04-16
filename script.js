const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '') {
    alert('Please enter your name');
    nameInput.focus();
  } else if (emailValue === '') {
    alert('Please enter your email');
    emailInput.focus();
  } else if (messageValue === '') {
    alert('Please enter your message');
    messageInput.focus();
  } else {
    form.submit();
  }
});
