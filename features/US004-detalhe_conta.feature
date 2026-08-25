Feature: US004 - Detalhes da conta do usuário



    Scenario: Configurar detalhes da conta do usuário com sucesso
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba "Detalhes da conta"
        And preencher os campos ["Fname", "Lname", "Dname", "email"]
        And clicar no botão "Salvar alterações"
        Then a seguinte mensagem deve aparecer: "Detalhes da conta alterados com sucesso."

        Examples:
            | Fname | Lname | Dname  | email      |
            | user  | 01    | user01 | user1_ebac |

