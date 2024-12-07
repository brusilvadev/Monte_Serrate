// Seleciona os elementos
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

// Alterna o menu mobile e o ícone ao clicar no ícone principal
menuIcon.addEventListener('click', openMenu);

// Fecha o menu ao clicar no ícone "X" dentro do menu
closeIcon.addEventListener('click', closeMenu);

// Fecha o menu ao clicar fora dele (overlay)
overlay.addEventListener('click', closeMenu);

// Função para abrir o menu
function openMenu() {
    mobileMenu.style.display = 'block';
    overlay.style.display = 'block';
    menuIcon.style.display = 'flex';
}

// Função para fechar o menu
function closeMenu() {
    mobileMenu.style.display = 'none';
    overlay.style.display = 'none';
    menuIcon.style.display = 'block';
}
