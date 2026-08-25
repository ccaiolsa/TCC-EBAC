Feature: US003 - API de cupons



    Scenario: Adição de cupom de 10% de desconto com sucesso
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$ 200,00 e abaixo de R$ 600,00
        And ele aplicar o cupom "EBAC10"
        Then ele deverá receber a seguinte mensagem "Código de cupom aplicado com sucesso."
    
    Scenario: Adição de cupom de 15% de desconto com sucesso
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$ 600,00
        And ele aplicar o cupom "EBAC15"
        Then ele deverá receber a seguinte mensagem "Código de cupom aplicado com sucesso."
    
    Scenario: Adição de cupom inválido
        Given que o usuário esteja no carrinho de compras
        When ele aplicar o cupom "EBAC99"
        Then ele deverá receber a seguinte mensagem "O cupom "ebac99" não existe!"
    
    Scenario: Adição de cupom de 15% inválido 
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras abaixo de R$ 600,00
        And ele aplicar o cupom "EBAC15"
        Then ele deverá receber a seguinte mensagem "O valor mínimo do pedido para este cupom é R$600,00."

   