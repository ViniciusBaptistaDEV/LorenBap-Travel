$(document).ready(function(){

    $('#telefone').mask('(00) 000000000');

    $('#formulario').validate({
        rules:{
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            'aceito-termos': {
                required: true
            }
        },

        messages: {
            nome: {
                required: "Por favor, insira seu nome."
            },
            telefone: {
                required: "Por favor, insira seu telefone."
            },
            email: {
                required: "Por favor, insira seu email.",
                email: "Por favor, insira um email válido."
            },
            'aceito-termos': {
                required: "Você deve concordar com os termos para enviar o formulário."
            }
        },

        submitHandler: function(form) {

            $('#alertas-mensagens').html('<div class="alert alert-dismissible alert-success show">' +
            'Seu dados foram enviados, entraremos em contato!' +
            '<button id="botaoalerta" class="btn-close" data-bs-dismiss="alert"></button>' +
            '</div>')
            form.reset();
        }

    })


})