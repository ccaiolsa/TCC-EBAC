Feature: US001 - Adicionar item ao carrinho



    Scenario: Adicionar item ao carrinho com sucesso
        Given que o usuário digitar "Ingrid Running Jacket" na barra de pesquisa
        When o usuário selecionar a cor "Orange" e o tamanho "XS"
        And o usuário clica no botão "Comprar"
        Then o item deve ser adicionado ao carrinho com sucesso

    Scenario: Não adicionar item ao carrinho quando o produto estiver indisponível
        Given que o usuário digitar "Ingrid Running Jacket" na barra de pesquisa
        When o usuário selecionar a cor "White" e o tamanho "XL"
        And o usuário clica no botão "Comprar"
        Then deve aparecer a seguinte mensagem "Desculpe, este produto não está disponível. Escolha uma combinação diferente."
    
    Scenario: Não adicionar uma quantidade além do estoque disponível
        Given que o usuário digitar "Ingrid Running Jacket" na barra de pesquisa
        When o usuário selecionar a cor "Orange",o tamanho "XS" e a quantidade "100"
        And o usuário clica no botão "Comprar"
        Then deve aparecer a seguinte mensagem "Quantidade indisponível no estoque"
    
    Scenario: Não adicionar item ao carrinho antes de definir suas especificações
        Given que o usuário digitar "Ingrid Running Jacket" na barra de pesquisa
        When o usuário clica no botão "Comprar"
        Then o botão estará desabilitado e não será possível adicionar o item ao carrinho