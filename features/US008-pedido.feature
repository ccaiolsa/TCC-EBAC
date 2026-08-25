Feature: US008 - Realizar pedido


    Scenario Outline: CT01 - Realizar pedido com sucesso
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos <nome>,<sobrenome>,<país>,<endereço>,<cidade>,<estado>,<CEP>,<telefone>,<e-mail>
        And clicado na forma de <pagamento>
        And marcar a opção Li e concordo com o(s) termos e condições do site
        And clicado no botão Finalizar Compra
        Then o usuário deve ser redirecionado para uma página com a mensagem <mensagem>
        Examples:
            | nome | sobrenome | país   | endereço | cidade | estado  | cep      | telefone   | e-mail           | pagamento              | mensagem                           |
            | user | 01        | Brasil | teste    | Teste  | Alagoas | 69123000 | 66666-6666 | teste1@email.com | Pagamento na entrega   | Obrigado. Seu pedido foi recebido. |
            | user | 01        | Brasil | teste    | Teste  | Alagoas | 69123000 | 66666-6666 | teste1@email.com | Cheque                 | Obrigado. Seu pedido foi recebido. |
            | user | 01        | Brasil | teste    | Teste  | Alagoas | 69123000 | 66666-6666 | teste1@email.com | Transferência bancária | Obrigado. Seu pedido foi recebido. |

    Scenario Outline: CT02 - Realizar pedido com cep incorreto
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos <nome>,<sobrenome>,<país>,<endereço>,<cidade>,<estado>,<CEP>,<telefone>,<e-mail>
        And clicado na forma de <pagamento>
        And marcar a opção Li e concordo com o(s) termos e condições do site
        And clicado no botão Finalizar Compra
        Then o usuário deve receber a seguinte mensagem <mensagem>
        Examples:
            | nome | sobrenome | país   | endereço | cidade | estado  | cep   | telefone   | e-mail           | pagamento            | mensagem                                                      |
            | user | 01        | Brasil | teste    | Teste  | Alagoas | 69123 | 66666-6666 | teste1@email.com | Pagamento na entrega | O campo "CEP" do endereço de faturamento não é um CEP válido. |

    Scenario Outline: CT03 - Realizar pedido sem marcar o aceite dos termos e condições do site
        Given que o usuário esteja na página de checkout
        When o usuário preencher os campos <nome>,<sobrenome>,<país>,<endereço>,<cidade>,<estado>,<CEP>,<telefone>,<e-mail>
        And clicado na forma de <pagamento>
        And clicado no botão Finalizar Compra
        Then o usuário deve receber a seguinte mensagem <mensagem>
            | nome | sobrenome | país   | endereço | cidade | estado  | cep      | telefone   | e-mail           | pagamento            | mensagem                                                              |
            | user | 01        | Brasil | teste    | Teste  | Alagoas | 69123000 | 66666-6666 | teste1@email.com | Pagamento na entrega | Leia e aceite os termos e condições para prosseguir com o seu pedido. |

    Scenario Outline: CT04 - Realizar pedido sem preencher os campos obrigatórios e sem marcar o termo de aceite
        Given que o usuário esteja na página de checkout
        When o usuário não preencher os campos obrigatórios
        And clicado no botão Finalizar Compra
        Then o usuário deve receber uma mensagem contendo: "campo obrigatório."
