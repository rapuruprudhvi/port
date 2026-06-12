/* ==========================
   SIDEBAR TOGGLE
========================== */

const menuBtn = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

    });

}

if (overlay) {

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    });

}

// Sidebar Close Button (Mobile)
const sidebarClose = document.getElementById("sidebarClose");

if (sidebarClose) {

    sidebarClose.addEventListener("click", () => {

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    });

}

/* ==========================
   DARK MODE
========================== */

const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "lightMode",
            isLight
        );

        // Update icon
        const icon = darkModeToggle.querySelector("i");
        if (isLight) {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        } else {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
        }

    });

}

// Load saved theme
window.addEventListener("load", () => {

    const savedMode =
        localStorage.getItem("lightMode");

    if (savedMode === "true") {

        document.body.classList.add("light-mode");
        const icon = darkModeToggle?.querySelector("i");
        if (icon) {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        }

    }

});

/* ==========================
   NOTIFICATION PANEL
========================== */

const notificationBtn =
    document.getElementById("notificationBtn");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotification =
    document.getElementById("closeNotification");

if (notificationBtn && notificationPanel) {

    notificationBtn.addEventListener("click", () => {

        notificationPanel.classList.toggle("active");

    });

    // Close button
    if (closeNotification) {
        closeNotification.addEventListener("click", () => {
            notificationPanel.classList.remove("active");
        });
    }

    // Click outside to close
    document.addEventListener("click", (e) => {

        if (
            !notificationBtn.contains(e.target) &&
            !notificationPanel.contains(e.target)
        ) {

            notificationPanel.classList.remove("active");

        }

    });

}

/* ==========================
   ANALYTICS CHART
========================== */

const chartCanvas =
    document.getElementById("analyticsChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul"
            ],

            datasets: [{

                label: "Users",

                data: [
                    120,
                    180,
                    250,
                    220,
                    390,
                    450,
                    520
                ],

                borderColor: "#4f46e5",

                backgroundColor:
                    "rgba(79,70,229,.15)",

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            }

        }

    });

}

/* ==========================
   QUICK ACTIONS
========================== */

const actionBoxes =
    document.querySelectorAll(".action-box");

actionBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        // Action click - no notification needed
        const action = box.querySelector("span").innerText;
        // Perform action silently

    });

});

/* ==========================
   USER MANAGEMENT
========================== */

const deleteButtons =
    document.querySelectorAll(".delete-user");

deleteButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        // Delete user without confirmation
        btn.closest("tr").remove();

    });

});

/* ==========================
   SEARCH FILTER
========================== */

const searchInput =
    document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const rows =
            document.querySelectorAll("tbody tr");

        rows.forEach((row) => {

            row.style.display =
                row.innerText
                .toLowerCase()
                .includes(value)
                ? ""
                : "none";

        });

    });

}

/* ==========================
   LOGOUT
========================== */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", (e) => {

        e.preventDefault(); // Prevent default anchor behavior

        // Clear session data
        localStorage.removeItem('loginSession');
        sessionStorage.removeItem('loginSession');

        // Redirect to login page
        window.location.href = "login.html";

    });

}

/* ==========================
   ACTIVE MENU & NAVIGATION
========================== */

const menuLinks =
    document.querySelectorAll(".sidebar-menu a");

const menuItems =
    document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

    item.addEventListener("click", (e) => {

        const link = item.querySelector("a");
        const href = link.getAttribute("href");

        // Handle navigation
        if (href && href.startsWith("#")) {
            e.preventDefault();

            // Remove active class from all menu items
            menuItems.forEach((i) => {
                i.classList.remove("active");
            });

            // Add active class to clicked item
            item.classList.add("active");

            // Get the section name
            const section = href.substring(1);

            // Show corresponding content
            showSection(section);

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
                overlay.classList.remove("active");
            }
        }

    });

});

// Function to show/hide sections
function showSection(sectionName) {

    // Hide all content views
    const allViews = document.querySelectorAll(".content-view");
    allViews.forEach(view => {
        view.style.display = "none";
    });

    // Show the selected view
    const targetView = document.getElementById(sectionName + "-view");
    if (targetView) {
        targetView.style.display = "block";

        // Update page title
        const pageTitle = document.querySelector(".page-title");
        const titles = {
            "dashboard": "Student Dashboard",
            "courses": "My Courses",
            "assignments": "Assignments",
            "grades": "Grades",
            "schedule": "Class Schedule",
            "resources": "Resources",
            "profile": "My Profile",
            "settings": "Settings"
        };

        if (pageTitle && titles[sectionName]) {
            pageTitle.textContent = titles[sectionName];
        }
    }

}

/* ==========================
   PAGE LOADER
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   LIVE CLOCK
========================== */

function updateClock() {

    const clock =
        document.getElementById("liveClock");

    if (!clock) return;

    const now = new Date();

    clock.innerText =
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);
updateClock();