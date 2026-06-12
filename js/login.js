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

    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get form values
    const userRole = document.getElementById("userRole").value;
    const email = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Basic validation
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email address";
        return;
    }

    if (!passwordValue) {
        document.getElementById("passwordError").textContent = "Please enter your password";
        return;
    }

    // Email validation with proper domain
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        return;
    }

    // Password length validation
    if (passwordValue.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        return;
    }

    // Check if user exists and validate credentials
    const userData = localStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);

        // Check if email matches
        if (user.email !== email) {
            document.getElementById("emailError").textContent = "Email not registered. Please sign up first";
            return;
        }

        // Check if password matches
        if (user.password !== passwordValue) {
            document.getElementById("passwordError").textContent = "Incorrect password. Please try again";
            return;
        }
    } else {
        // No user data found
        document.getElementById("emailError").textContent = "No account found. Please sign up first";
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

    // Redirect based on selected role (no success alert)
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