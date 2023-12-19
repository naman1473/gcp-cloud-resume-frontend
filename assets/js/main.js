// calls the function visitorCount()
document.addEventListener('DOMContentLoaded', visitorCount)

function visitorCount() {

	// cloud function api link
    const url = 'https://us-central1-gcp-challenge-408108.cloudfunctions.net/gcp-api';

    fetch(url, { method: 'POST' }) // POST request to increment the counter
    .then(response => response.json())
    .then(data => {
        // Update the count on the webpage
        document.getElementById('visitorCount').textContent = data.currentVisitor;
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').textContent = 'Unavailable';
    });
};

