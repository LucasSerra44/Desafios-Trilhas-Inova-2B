const botaoLogin = document.querySelector('.botao_enviar');
const botaoModoEscuro = document.querySelector('.botaoModoEscuro') 
const corDaPagina = document.querySelector('.pagina')
const conteiner = document.querySelector('.conteiner')
const cadastro = document.querySelector('.cadastro')
const iconesTrilha = document.querySelectorAll('.icones_opcao')
const formulario = document.querySelector('form')

if (botaoLogin) {
    botaoLogin.addEventListener('click', () => {
        const idDigitado = document.querySelector('input[name="usuario"]')?.value;
        const senhaDigitada = document.querySelector('input[name="senha"]')?.value;

        const idSalvo = localStorage.getItem('idUsuario');
        const senhaSalva = localStorage.getItem('senhaUsuario');

        if (idDigitado === idSalvo && senhaDigitada === senhaSalva) {
            alert("Em desenvonvimento. Disponível em breve!")
        } else {
            alert("Em desenvonvimento. Disponível em breve");
        }
    });
}

function mostrarSenha(){
    let inputSenha = document.getElementById('senha')
    let mostrarSenha = document.getElementById('btn-senha')
    if(inputSenha.type === 'password') {
        inputSenha.setAttribute('type','text')
        mostrarSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        inputSenha.setAttribute('type','password')
        mostrarSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

function ativarModoEscuro() {
    corDaPagina?.classList.add('escuro')
    conteiner?.classList.add('conteiner_escuro')
    cadastro?.classList.add('cadastro_escuro')
    iconesTrilha?.forEach(icone => {
        icone.classList.add('icones_opcao_escuro')
    })
    botaoModoEscuro.textContent = 'Modo Claro'
    localStorage.setItem('modo-escuro', 'true')
}

function desativarModoEscuro(){
    corDaPagina?.classList.remove('escuro')
    conteiner?.classList.remove('conteiner_escuro')
    cadastro?.classList.remove('cadastro_escuro')
    iconesTrilha?.forEach(icone => {
        icone.classList.remove('icones_opcao_escuro')
    })
    botaoModoEscuro.textContent = 'Modo Escuro'
    localStorage.setItem('modo-escuro', 'false')
}

if(localStorage.getItem('modo-escuro') === 'true'){
    ativarModoEscuro()
}

botaoModoEscuro.addEventListener('click', () => {
    if(corDaPagina?.classList.contains('escuro')){
        desativarModoEscuro()
    } else{
        ativarModoEscuro()
    }
})
