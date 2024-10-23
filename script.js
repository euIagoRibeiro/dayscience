const formulario = document.querySelector('#formulario')

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src = "assets/menu.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.menu-icon').src = "assets/close.svg";
    }
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;

    const dadosFormulario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email
    };

    let dadosExistentes = localStorage.getItem('dadosFormulario');

    dadosExistentes = dadosExistentes ? JSON.parse(dadosExistentes) : [];
    dadosExistentes.push(dadosFormulario);
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosExistentes));

    alert('Dados salvos com sucesso');

    document.getElementById('formulario').reset();

});