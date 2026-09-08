Feature: US007 - Criando minha Conta de usuário



    Scenario Outline: CT01 - Realizar registro de usuário com sucesso
        Given que o usuário esteja na página minha conta
        When o usuário preencher os campos "<email>" e "<senha>"
        Then o usuário deve ser redirecionado para a página do perfil do usuário

        Examples:
            | email   | senha   |
            | Value6@email.com | Teste1! |

    Scenario Outline: CT02 - Fazer cadastro sem preencher senha
        Given que o usuário esteja na página minha conta
        When o usuário preencher os campos "<email>" e "<senha>"
        Then a mensagem "<mensagem>" deve aparecer na tela

        Examples:
            | email         | senha | mensagem                       |
            | teste@ebac.com |       | Erro: Digite a senha da conta. |

    Scenario Outline: CT03 - Fazer cadastro sem preencher email
        Given que o usuário esteja na página minha conta
        When o usuário preencher os campos "<email>" e "<senha>"
        Then a mensagem "<mensagem>" deve aparecer na tela
        Examples:
           | email | senha  | mensagem                                    |
            |       | Teste1 | Erro: Informe um endereço de e-mail válido. |

    Scenario Outline: CT04 - Realizar registro sem preencher um campo
        Given que o usuário esteja na página minha conta
        When o usuário preencher os campos "<email>" e "<senha>"
        Then a mensagem "<mensagem>" deve aparecer na tela
        Examples:
            | email | senha | mensagem                                    |
            |       |       | Erro: Informe um endereço de e-mail válido. |
