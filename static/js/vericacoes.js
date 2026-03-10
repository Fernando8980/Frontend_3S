// var nome = prompt("Como voce chama?")
//
// if (nome == null) {
//     alert("Recarregue a pagina")
// } else {
//     let correto = confirm("voce se chama " + nome + "?")
//
//     if (correto) {
//         alert(nome + " Bem vindo ao site de cursos")
//     } else {
//         alert("Recarregue a pagina")
//     }
// }
function LimpaInputsLogin() {
    const inputEmail = document.getElementById('input-email')
    const inputSenha = document.getElementById('input-senha ')

    inputEmail.value = ''
    inputSenha.value = ''
}

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById('form-login')

    formLogin.addEventListener("submit", function (event) {
        // Pegar os dois inputs do formulario
        const inputEmail = document.getElementById('input-email')
        const inputSenha = document.getElementById('input-senha ')

        let temErro = false
        // Verificar se os  inputs estao vazios

        if (inputEmail.value === '') {
            inputEmail.classList.add('is-invalid')
            temErro = true
        } else {
            inputEmail.classList.remove('is-invalid')
        }

        if (inputSenha.value === '') {
            inputSenha.classList.add('is-invalid')
            temErro = true
        } else {
            inputSenha.classList.remove('is-invalid')
        }

        if (temErro) {
            //Envita de enviar o form
            event.preventDefault()
            alert("Preencha todos os campos")
        }
    })
})
