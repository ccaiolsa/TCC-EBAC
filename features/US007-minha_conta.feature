Feature: US007 - Minha Conta



    Scenario: Realizar registro de usuário com sucesso
        Given que o usuário esteja na página de login
        When o usuário preencher os campos ["email","senha"]
        And clicar em registrar
        Then o usuário deve ser redirecionado para a página do perfil do usuário

        Examples:
            | email   | senha   |
            | Value 1 | Value 2 |
