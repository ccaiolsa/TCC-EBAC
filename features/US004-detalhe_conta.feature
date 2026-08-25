Feature: US004 - Detalhes da conta do usuário


    Scenario Outline: CT01 - Configurar detalhes da conta do usuário com sucesso
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta
        And preencher os campos <Fname>, <Lname>, <Dname>, <email>
        And clicar no botão Salvar alterações
        Then a seguinte mensagem deve aparecer: <mensagem>

        Examples:
            | Fname | Lname | Dname  | email               | mensagem                                 |
            | user  | 01    | user01 | user1_ebac@ebac.com | Detalhes da conta alterados com sucesso. |

    Scenario Outline: CT02 - Configurar detalhes da conta com email inválido
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta
        And preencher os campos <Fname>, <Lname>, <Dname>, <email>
        And clicar no botão Salvar alterações
        Then a seguinte mensagem deve aparecer: <mensagem>
        Examples:
            | Fname | Lname | Dname  | email           | mensagem                                 |
            | user  | 01    | user01 | user1_ebac@ebac | Detalhes da conta alterados com sucesso. |

    Scenario Outline: CT03 - Configurar detalhes não preenchendo campos obrigatórios
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta
        And e não preencher os campos obrigatórios
        And clicar no botão Salvar alterações
        Then a seguinte mensagem deve conter:<mensagem>

        Examples:
            | mensagem          |
            | campo obrigatório |

    Scenario Outline: CT04 - Configurar detalhes da conta apenas com email válido
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta
        And preencher apenas o campo <email>
        And clicar no botão Salvar alterações
        Then a seguinte mensagem deve conter: <mensagem>
        Examples:
            | email               | mensagem          |
            | user1_ebac@ebac.com | campo obrigatório |

