// Script for form submission validation or interaction
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        // Optionally clear the form fields after submission
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
