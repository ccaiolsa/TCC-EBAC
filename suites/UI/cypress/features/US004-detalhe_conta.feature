Feature: US004 - Detalhes da conta do usuário


    Scenario Outline: CT01 - Configurar detalhes da conta do usuário com sucesso
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta e preencher os campos "<Fname>", "<Lname>", "<Dname>", "<email>"
        Then deve aparecer: "<mensagem>"
        Examples:
            | Fname | Lname | Dname  | email               | mensagem                                   |
            | user  | 01    | user01 | user1_ebac@ebac.com | Detalhes da conta modificados com sucesso. |

    Scenario Outline: CT02 - Configurar detalhes da conta com email inválido
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta e preencher os campos "<Fname>", "<Lname>", "<Dname>", "<email>"
        Then deve aparecer: "<mensagem>"
        Examples:
            | Fname | Lname | Dname  | email           | mensagem                                 |
            | user  | 01    | user01 | user1_ebac@ebac | Informe um endereço de e-mail válido. |

    Scenario Outline: CT03 - Configurar detalhes não preenchendo campos obrigatórios
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta e apertar o botão Salvar alterações
        Then deve aparecer: "<mensagem>"
        Examples:
            | mensagem          |
            | campo obrigatório |

    Scenario Outline: CT04 - Configurar detalhes da conta apenas com email válido
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta e preencher apenas o campo "<email>"
        Then deve aparecer: "<mensagem>"
        Examples:
            | email               | mensagem          |
            | user1_ebac@ebac.com | campo obrigatório |

