document.getElementById('registration-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, category })
    });

    if (response.ok) {
        alert('Registration successful!');
        this.reset();
    } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
    }
});
