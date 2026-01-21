// 1. Initial "Database" with 5 users
const initialUsers = [
    { name: "Alex Doe", email: "alex@example.com", password: "password123" },
    { name: "Remirose", email: "remi@example.com", password: "remipassword" },
    { name: "Juan Luna", email: "juan@lms.ph", password: "securelogin" },
    { name: "Maria Clara", email: "maria@test.com", password: "maria2026" },
    { name: "Admin User", email: "admin@eduflow.com", password: "adminpassword" }
];

// 2. Initialize LocalStorage if empty
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

// 3. Handle Registration
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert("Please agree to the Terms of Service.");
        return;
    }

    // Get current users from "database"
    let currentUsers = JSON.parse(localStorage.getItem('users'));

    // Check if email already exists
    const userExists = currentUsers.some(user => user.email === email);
    
    if (userExists) {
        alert("This email is already registered!");
    } else {
        // Add new user to the array
        const newUser = { name, email, password };
        currentUsers.push(newUser);

        // Save back to LocalStorage
        localStorage.setItem('users', JSON.stringify(currentUsers));

        alert("Registration Successful! Welcome, " + name);
        console.log("Updated Database:", currentUsers);
        
        // Redirect to Dashboard
        window.location.href = "./index.html";
    }
});