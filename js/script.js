/* =====================================================
   STACKLY - MAIN.JS
   Complete JavaScript File
===================================================== */

/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 1200);

    }

});

/* =====================================================
   AOS INIT
===================================================== */

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});

/* =====================================================
   TYPED JS
===================================================== */

const typedElement =
    document.getElementById("typed");

if (typedElement) {

    new Typed("#typed", {

        strings: [

            "Web Development",

            "UI / UX Design",

            "Cloud Solutions",

            "Digital Transformation"

        ],

        typeSpeed: 60,

        backSpeed: 40,

        backDelay: 1500,

        loop: true

    });

}

/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.98)";

        navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "none";

    }

});

/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const href =
        link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(".stat-box h2");

const animateCounter = (counter) => {

    const target =
        parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 100;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText =
                Math.floor(count) + "+";

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.innerText =
                target + "+";

        }

    };

    updateCounter();

};

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(
                        entry.target
                    );

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.5

        }

    );

counters.forEach(counter => {

    const text =
        counter.innerText;

    if (text.includes("+")) {

        counterObserver.observe(counter);

    }

});

/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",

        function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");

            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }

            alert(
                "✓ Message Sent Successfully!\n\nThank you for contacting Stackly."
            );

            contactForm.reset();

        }

    );

}

/* =====================================================
   PROJECT CARD HOVER EFFECT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",

        () => {

            card.style.transform =
                "translateY(-10px)";

        }

    );

    card.addEventListener(
        "mouseleave",

        () => {

            card.style.transform =
                "translateY(0px)";

        }

    );

});

/* =====================================================
   SERVICE CARD EFFECT
===================================================== */

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener(
        "mousemove",

        () => {

            card.style.borderColor =
                "rgba(37,99,235,.4)";

        }

    );

    card.addEventListener(
        "mouseleave",

        () => {

            card.style.borderColor =
                "rgba(255,255,255,.08)";

        }

    );

});

/* =====================================================
   SMOOTH PAGE TRANSITION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",

    () => {

        document.body.style.opacity =
            "1";

    }

);

/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(
        ".custom-btn"
    );

buttons.forEach(button => {

    button.addEventListener(
        "click",

        function (e) {

            const circle =
                document.createElement(
                    "span"
                );

            const diameter =
                Math.max(
                    this.clientWidth,
                    this.clientHeight
                );

            const radius =
                diameter / 2;

            circle.style.width =
                circle.style.height =
                `${diameter}px`;

            circle.style.left =
                `${e.clientX -
                this.offsetLeft -
                radius}px`;

            circle.style.top =
                `${e.clientY -
                this.offsetTop -
                radius}px`;

            circle.classList.add(
                "ripple"
            );

            const ripple =
                this.getElementsByClassName(
                    "ripple"
                )[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        }

    );

});

/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cSTACKLY",
    "font-size:24px;color:#2563eb;font-weight:bold;"
);

console.log(
    "Transforming Ideas Into Powerful Digital Solutions 🚀"
);

/* =====================================================
   END OF MAIN.JS
===================================================== */