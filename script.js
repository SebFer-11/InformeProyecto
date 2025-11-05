// ===== BOTÓN "VOLVER ARRIBA" =====
const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== EFECTO DE SOMBRA EN NAVBAR =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.boxShadow = "0 3px 8px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// ===== EFECTO SUAVE EN ENLACES =====
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
