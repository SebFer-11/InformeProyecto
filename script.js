// ===== BOTÓN "VOLVER ARRIBA" =====
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
        btnTop.style.opacity = "1";
    } else {
        btnTop.style.opacity = "0";
        setTimeout(() => (btnTop.style.display = "none"), 300);
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== EFECTO DE SOMBRA EN NAVBAR =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 80
        ? "0 3px 8px rgba(0,0,0,0.2)"
        : "none";
});

// ===== EFECTO SUAVE EN ENLACES =====
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== DESTACAR ENLACE ACTIVO SEGÚN SCROLL =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
