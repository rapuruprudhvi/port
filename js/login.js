const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click", () => {

    const type =
    password.getAttribute("type") === "password"
    ? "text"
    : "password";

    password.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});

// Login Form Submission Handler
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const userRole = document.getElementById("userRole").value;
    const email = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;

    // Basic validation
    if (!email || !passwordValue) {
        alert("Please fill in all fields");
        return;
    }

    // Redirect based on selected role
    switch(userRole) {
        case "Student":
            window.location.href = "dashboard.html";
            break;
        case "Developer":
            window.location.href = "dashboard.html"; // Can change to developer-dashboard.html if needed
            break;
        case "Admin":
            window.location.href = "admin.html";
            break;
        default:
            window.location.href = "dashboard.html";
    }
});