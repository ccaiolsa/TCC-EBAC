Feature: US005 - Configurar endereço



    Scenario Outline: CT01 - Configurar endereço com sucesso
        Given que o usuário estiver no seu perfil
        When o usuário acessar Endereço -> Shipping Address e preencher os campos "<Fname>", "<Lname>", "<país>", "<endereço>", "<cidade>","<estado>", "<cep>"
        Then a "<mensagem>" deve aparecer

        Examples:
            | Fname | Lname | país    | endereço       | cidade       |estado       | cep    | mensagem                       |
            | user  | 01    | Albânia | endereco-teste | cidade-teste | cidade-teste|999999 | Endereço alterado com sucesso. |

    Scenario Outline: CT02 - Configurar endereço com CEP inválido
        Given que o usuário estiver no seu perfil
        When o usuário acessar Endereço -> Shipping Address e preencher os campos "<Fname>", "<Lname>", "<país>", "<endereço>", "<cidade>","<estado>", "<cep>"
        Then a "<mensagem>" deve aparecer

        Examples:
            | Fname | Lname | país    | endereço       | cidade       | estado       | cep    | mensagem                       |
            | user  | 01    | Albânia | endereco-teste | cidade-teste | cidade-teste | ++++++ | Digite um CEP válido. |

    Scenario Outline: CT03 - Configurar endereço sem preencher os campos obrigatórios
        Given que o usuário estiver no seu perfil
        When o usuário acessar Endereço -> Shipping Address e não preencher os campos
        Then a "<mensagem>" deve aparecer
        Examples:
            | mensagem          |
            | campo obrigatório |

    Scenario Outline: CT04 - Configurar detalhes com o apenas campo CEP preenchido corretamente
        Given que o usuário estiver no seu perfil
        When o usuário acessar Endereço -> Shipping Address e preencher os campos "<cep>"
        Then a "<mensagem>" deve aparecer
        Examples:
            | cep    | mensagem          |
            | 999999 | campo obrigatório |
