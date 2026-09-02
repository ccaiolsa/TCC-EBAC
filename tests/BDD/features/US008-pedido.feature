Feature: US008 - Realizar pedido


    Scenario Outline: CT01 - Realizar pedido com sucesso
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos "<nome>", "<sobrenome>", "<endereço>", "<cidade>", "<cep>", "<telefone>", "<e-mail>" a forma de pagamento "<pagamento>" e marcar os termos de aceite
        Then o usuário deve visualizar: "<mensagem>"
        Examples:
            | nome | sobrenome | endereço | cidade | cep      | telefone   | e-mail           | pagamento | mensagem                           |
            | user | 01        | teste    | Teste  | 69123000 | 66666-6666 | teste1@email.com | cod       | Obrigado. Seu pedido foi recebido. |
            | user | 01        | teste    | Teste  | 69123000 | 66666-6666 | teste1@email.com | cheque    | Obrigado. Seu pedido foi recebido. |
            | user | 01        | teste    | Teste  | 69123000 | 66666-6666 | teste1@email.com | bacs      | Obrigado. Seu pedido foi recebido. |

    Scenario Outline: CT02 - Realizar pedido com cep incorreto
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos "<nome>", "<sobrenome>", "<endereço>", "<cidade>", "<cep>", "<telefone>", "<e-mail>" a forma de pagamento "<pagamento>" e marcar os termos de aceite
        Then o usuário deve visualizar: "<mensagem>"
        Examples:
            | nome | sobrenome | endereço | cidade | cep   | telefone   | e-mail           | pagamento | mensagem                                                      |
            | user | 01        | teste    | Teste  | 69123 | 66666-6666 | teste1@email.com | cod       | não é um CEP válido. |

    Scenario Outline: CT03 - Realizar pedido sem marcar o aceite dos termos e condições do site
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos "<nome>", "<sobrenome>", "<endereço>", "<cidade>", "<cep>", "<telefone>", "<e-mail>" a forma de pagamento "<pagamento>"
        Then o usuário deve visualizar: "<mensagem>"
        Examples:
            | nome | sobrenome | endereço | cidade | cep      | telefone   | e-mail           | pagamento | mensagem                                                              |
            | user | 01        | teste    | Teste  | 69123000 | 66666-6666 | teste1@email.com | cod       | Leia e aceite os termos e condições para prosseguir com o seu pedido. |

    Scenario Outline: CT04 - Realizar pedido sem preencher os campos obrigatórios e sem marcar o termo de aceite
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos "<nome>", "<sobrenome>", "<endereço>", "<cidade>", "<cep>", "<telefone>", "<e-mail>" a forma de pagamento "<pagamento>"
        Then o usuário deve visualizar: "<mensagem>"
        Examples:
            | nome | sobrenome | endereço | estado  | cep | telefone | e-mail | pagamento | mensagem                                    |
            |      |           |          | Alagoas |     |          |        | cod       | um campo obrigatório. |