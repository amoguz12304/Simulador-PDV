/* Modo Claro/Escuro */
function alterarModo() {
    const icone = document.getElementById('icone-modo');

    if (icone.classList.contains('fa-moon')){
        icone.classList.replace('fa-moon', 'fa-sun');  
        //Gravando a escolha de modo escuro no localStorage
        localStorage.setItem('modo', 'escuro');
    }
    else {
        icone.classList.replace('fa-sun', 'fa-moon');
        //Gravando a escolha de modo claro no localStorage
        localStorage.setItem('modo', 'claro');
    }

    document.body.classList.toggle('dark-mode');
}

//carregar o modo
function carregarModo() {
    const modoSalvo = localStorage.getItem('modo');
    const icone = document.getElementById('icone-modo');

    if (modoSalvo == 'escuro') {
        document.body.classList.add('dark-mode');
        icone.classList.replace('fa-moon', 'fa-sun');
    }
    else {
        document.body.classList.remove('dark-mode');
        icone.classList.replace('fa-sun', 'fa-moon');
    }
}

//Executar a função carregarModo assim que a página terminar de carregar
carregarModo();

/* Recolher / Ampliar menu lateral */
function processarSideBar(){
    //Ocultar os nomes (textos) do menu
    const textos = document.getElementsByClassName('texto-menu');
    for (let i=0; i < textos.length; i++)
        textos[i].classList.toggle('texto-collapse')

    //centralizar os ícones que sobraram na barra
    const menu = document.querySelectorAll('.sidebar nav')
    for (let i=0; i < menu.length; i++)
        menu[i].classList.toggle('icone-centralizado')
   
    //reduzir o comprimento lateral da barra de menu
    const barra = document.getElementById('sidebar')
    barra.classList.toggle('collapsed')
}

function verificarLogin(){
    const logado = sessionStorage.getItem('logado') == 'true';
    const nome = sessionStorage.getItem('nome');

    if (!logado)
        window.location.href = 'login.html'; //Manda para Login.html
    else {
        const usuario = document.getElementById('usuario');
        usuario.innerText = `Olá ${nome}`;
    }
}

// Verifica o login quando a página terminar de carregar e manda para página de login caso não esteja logado.
window.onload = verificarLogin();

function logout(){
    sessionStorage.clear();
    window.location.href = 'login.html';
}




