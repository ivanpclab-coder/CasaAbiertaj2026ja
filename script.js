function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Ocultar menú al hacer clic en un link (en móvil)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("nav-links").classList.remove("active");
    });
});

console.log("Sistema Jahibé 2026 en línea.");