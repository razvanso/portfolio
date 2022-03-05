const emailErrorMessage = 'Please enter email address in small letters.';
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessageContainer = document.querySelector('.error-message');

const validateEmail = () => {
  const lowercaseEmail = emailInput.value.toLowerCase();
  if (lowercaseEmail !== emailInput.value) {
    emailInput.classList.add('email-error');
    emailInput.focus();
    errorMessageContainer.textContent = emailErrorMessage;
    return false;
  }
  errorMessageContainer.classList.remove('email-error');
  return true;
};

contactForm.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
