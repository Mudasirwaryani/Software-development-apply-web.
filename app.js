document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Application submitted successfully!');
        document.getElementById('applicationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Your application is submited you will recieve an email after 24 hours.');
    });
});
