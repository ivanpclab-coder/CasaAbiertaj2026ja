// Solo funciones básicas de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil básico
    const menuBtn = document.querySelector('button.md:hidden');
    const navMenu = document.querySelector('nav div.md\\:flex');
    
    if(menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-16');
            navMenu.classList.toggle('right-4');
            navMenu.classList.toggle('bg-jahibe-oscuro/95');
            navMenu.classList.toggle('p-4');
            navMenu.classList.toggle('rounded-lg');
            navMenu.classList.toggle('border');
            navMenu.classList.toggle('border-jahibe-azul/30');
        });
    }
});