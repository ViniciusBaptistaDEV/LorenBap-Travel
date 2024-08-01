$(document).ready(function(){

    $('#telefone').mask('(00) 000000000');

    /* Validação "Entre em contato" - INICIO*/ 
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
    /* Validação "Entre em contato" - FIM*/ 


    /* Validação "Login" - INICIO*/ 
    $('#formLogin').validate({
        rules:{
            emaillogin: {
                required: true,
                email: true
            },
            senha: {
                required: true
            }
        },

        messages: {
            emaillogin: {
                required: "Por favor, insira seu email.",
                email: "Por favor, insira um email válido."
            },
            senha: {
                required: "Você deve digitar sua senha para entrar."
            }
        },

        submitHandler: function(form) {

            $('#alertas-mensagens-login').html('<div class="alert alert-dismissible alert-success show">' +
            'Seu login foi realizado com sucesso!' +
            '<button class="btn-close" data-bs-dismiss="alert"></button>' +
            '</div>')
            form.reset();
        }
    });

    $('#buttonEntrar').on('click', function(){
        $('#formLogin').submit();
    });
    /* Validação "Login" - FIM*/ 


    /* Validação "Cadastro" - INICIO*/
    $('#formCadastro').validate({
        rules:{
            nomeCadastro: {
                required: true
            },
            telefoneCadastro: {
                required: true
            },
            emailCadastro: {
                required: true,
                email: true
            },
            senhaCadastro: {
                required: true
            }
        },

        messages: {
            nomeCadastro: {
                required: "Por favor, insira seu nome."
            },
            telefoneCadastro: {
                required: "Por favor, insira seu telefone."
            },
            emailCadastro: {
                required: "Por favor, insira seu email.",
                email: "Por favor, insira um email válido."
            },
            senhaCadastro: {
                required: "Você deve digitar a senha para concluir o cadastro."
            }
        },

        submitHandler: function(form) {

            $('#alertas-mensagens-cadastro').html('<div class="alert alert-dismissible alert-success show">' +
            'Seu cadastro foi realizado com sucesso!<br>Entre com seu login e senha.' +
            '<button class="btn-close" data-bs-dismiss="alert"></button>' +
            '</div>')
            form.reset();
        }
    });

    $('#buttonCadastrar').on('click', function(){
        $('#formCadastro').submit();
    });
    /* Validação "Cadastro" - FIM*/


})