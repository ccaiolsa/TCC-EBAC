Feature: US005 - Configurar endereço



    Scenario: Configurar endereço com sucesso
        Given que o usuário estiver no seu perfil
        When o usuário acessar a aba "Endereço"
        And clicar em "Shipping Address"
        And preencher os campos ["Fname", "Lname", "país", "endereço", "cidade", "estado", "cep"]
        And clicar no botão "Salvar endereço"
        Then a seguinte mensagem deve aparecer: "Endereço alterado com sucesso."

        Examples:
            | Fname | Lname | país    | endereço       | cidade       | estado       | cep    |
            | user  | 01    | Albânia | endereco-teste | cidade-teste | estado-teste | 999999 |