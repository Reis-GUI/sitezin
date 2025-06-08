const amor = "Julia Zuchello";
const lovely = "22122021";

// Passo 2: Pegar os elementos do HTML
const form = document.getElementById('login-form');
const inputU = document.getElementById('usuario');
const inputS = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagem-erro');

// Passo 3: Adicionar um "ouvinte" para o evento de envio do formulário
form.addEventListener('submit', function(event) {
    // Impede que o formulário seja enviado da forma tradicional (recarregando a página)
    event.preventDefault();

    // Passo 4: Pegar os valores digitados pelo usuário
    const usuarioD = inputU.value;
    const senhaD = inputS.value;

    // Passo 5: Fazer a verificação (a lógica que você pensou!)
    if (usuarioD === amor && senhaD === lovely) {
        // Se estiver correto...
        console.log("Login bem-sucedido!");
        
        // Redireciona o usuário para a página secreta
        window.location.href = 'galeria.html';
    } else {
        // Se estiver incorreto...
        console.log("Falha no login!");
        
        // Mostra uma mensagem de erro
        mensagemErro.textContent = 'Ops! Usuário ou senha incorretos. Tente de novo!';
        
        // Limpa os campos para uma nova tentativa
        inputSenha.value = "";
        inputUsuario.value = "";
        inputUsuario.focus(); // Coloca o cursor de volta no campo de usuário
    }
});