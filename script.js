document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const slot = document.getElementById('slot').value;

  if (name && email && slot) {
    // Here you can add code to send the booking data to a backend or email service
    // For now, we'll just show a confirmation message

    document.getElementById('booking-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
  } else {
    alert('Please fill in all fields.');
  }
});
