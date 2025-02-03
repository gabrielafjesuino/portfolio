// Quando o conteúdo da página estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    // Encontrar todos os links com # (âncoras)
    const links = document.querySelectorAll('a[href^="#"]');

    // Para cada link, adicionar um evento de clique
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Impede o comportamento padrão do link (navegar)

            // Obter a seção alvo com base no href do link
            const target = document.querySelector(link.getAttribute('href'));

            // Se a seção existir, rolar suavemente até ela
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var messageElement = document.getElementById('message');

    if (name === "" || email === "") {
        messageElement.textContent = "Por favor, preencha todos os campos.";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Obrigado, " + name + "! Seu e-mail foi enviado com sucesso.";
        messageElement.style.color = "green";

        document.getElementById('contactForm').reset();
    }
});

const images = document.querySelectorAll('.img-1');

images.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
    });
});