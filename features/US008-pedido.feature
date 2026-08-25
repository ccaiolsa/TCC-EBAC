Feature: US008 - Realizar pedido



    Scenario: Realizar pedido com sucesso
        Given que o usuário tenha feito o login
        When o usuário adicionar o produto "Abominable Hoodie - XS, Blue" no carrinho
        And clicado no botão Concluir compra
        And selecionado a opção "Pagamento na entrega" e Li e concordo com o(s) termos e condições do site
        And clicado no botão Finalizar Compra
        Then o usuário deve ser redirecionado para uma página com a mensagem "Obrigado. Seu pedido foi recebido."
