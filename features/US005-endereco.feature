Feature: US005 - Configurar endereço



    Scenario Outline: CT01 - Configurar endereço com sucesso
        Given que o usuário estiver no seu perfil
        When o usuário acessar a aba Endereço
        And clicar em Shipping Address
        And preencher os campos <Fname>, <Lname>, <país>, <endereço>, <cidade>, <estado>, <cep>
        And clicar no botão Salvar endereço
        Then a seguinte mensagem deve aparecer: <mensagem>

        Examples:
            | Fname | Lname | país    | endereço       | cidade       | estado       | cep    | mensagem                       |
            | user  | 01    | Albânia | endereco-teste | cidade-teste | estado-teste | 999999 | Endereço alterado com sucesso. |

    Scenario Outline: CT02 - Configurar endereço com CEP inválido
        Given que o usuário estiver no seu perfil
        When o usuário acessar a aba Endereço
        And clicar em Shipping Address
        And preencher os campos <Fname>, <Lname>, <país>, <endereço>, <cidade>, <estado>, <cep>
        And clicar no botão Salvar endereço
        Then a seguinte mensagem deve aparecer: <mensagem>

        Examples:
            | Fname | Lname | país    | endereço       | cidade       | estado       | cep    | mensagem                       |
            | user  | 01    | Albânia | endereco-teste | cidade-teste | estado-teste | ++++++ | Endereço alterado com sucesso. |

    Scenario Outline: CT03 - Configurar endereço sem preencher os campos obrigatórios
        Given que o usuário estiver no seu perfil
        When o usuário acessar a aba Endereço
        And clicar em Shipping Address
        And não preencher os campos
        And clicar no botão Salvar endereço
        Then a seguinte mensagem deve conter: <mensagem>
        Examples:
            | mensagem          |
            | campo obrigatório |

    Scenario Outline: CT04 - Configurar detalhes com o apenas campo CEP preenchido corretamente
        Given que o usuário esteja no seu perfil
        When o usuário acessar a aba Detalhes da conta
        And e preencher o campo CEP: <cep>
        And clicar no botão Salvar alterações
        Then a seguinte mensagem deve conter:<mensagem>
        Examples:
            | cep    | mensagem          |
            | 999999 | campo obrigatório |
