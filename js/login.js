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
    const rememberMe = document.getElementById("rememberMe").checked;

    // Basic validation
    if (!email || !passwordValue) {
        alert("Please fill in all fields");
        return;
    }

    // Email validation with proper domain
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address with a proper domain (e.g., .com, .co, .org)");
        return;
    }

    // Store login session
    const loginData = {
        role: userRole,
        email: email,
        rememberMe: rememberMe,
        loginTime: new Date().toISOString()
    };

    if (rememberMe) {
        localStorage.setItem('loginSession', JSON.stringify(loginData));
    } else {
        sessionStorage.setItem('loginSession', JSON.stringify(loginData));
    }

    // Show success message
    alert(`Login successful as ${userRole}!`);

    // Redirect based on selected role
    switch(userRole) {
        case "Student":
            window.location.href = "dashboard.html";
            break;
        case "Developer":
            window.location.href = "developer-dashboard.html";
            break;
        case "Admin":
            window.location.href = "admin.html";
            break;
        default:
            window.location.href = "dashboard.html";
    }
});