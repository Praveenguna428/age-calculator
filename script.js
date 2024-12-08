document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let birthdate = document.getElementById('birthdate').value;
    let result = calculateAge(birthdate);
    document.getElementById('result').textContent = result;
});

function calculateAge(birthdate) {
    let today = new Date();
    let birthDate = new Date(birthdate.split('/').reverse().join('/'));
    if (isNaN(birthDate)) {
        return "Invalid date format. Please enter the date in DD/MM/YYYY format.";
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return `You are ${age} years old.`;
}

// Generate bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.width = `${Math.random() * 20 + 10}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 300);
