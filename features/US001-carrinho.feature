Feature: US001 - Adicionar item ao carrinho



    Scenario Outline: CT01 - Adicionar item ao carrinho com sucesso
        Given que o usuário digitar <produto> na barra de pesquisa
        When o usuário selecionar a cor <cor> e o tamanho <tamanho>
        And o usuário clica no botão Comprar
        Then o item deve ser adicionado ao carrinho com sucesso
        Examples:
            | produto               | cor    | tamanho |
            | Ingrid Running Jacket | Orange | XS      |

    Scenario Outline: CT02 - Atingir o limite máximo do mesmo produto
        Given que o usuário digitar <produto> na barra de pesquisa
        When o usuário selecionar a cor <cor> e o tamanho <tamanho>
        And o usuário clica no botão Comprar
        Then deve aparecer a seguinte mensagem <mensagem>
        Examples:
            | produto               | cor   | tamanho | mensagem                                                                      |
            | Ingrid Running Jacket | White | XL      | Desculpe, este produto não está disponível. Escolha uma combinação diferente. |

    Scenario Outline: CT03 - Adicionar uma quantidade além do estoque disponível
        Given que o usuário digitar <produto> na barra de pesquisa
        When o usuário selecionar a cor <cor> e o tamanho <tamanho> e a <quantidade>
        And o usuário clica no botão Comprar
        Then deve aparecer a seguinte mensagem <mensagem>
        Examples:
            | produto               | cor    | tamanho | quantidade | mensagem                           |
            | Ingrid Running Jacket | Orange | XS      | 100        | Quantidade indisponível no estoque |

    Scenario Outline: CT04 - Adicionar item ao carrinho antes de definir suas especificações
        Given que o usuário digitar <produto> na barra de pesquisa
        When o usuário clica no botão Comprar
        Then o botão estará desabilitado e não será possível adicionar o item ao carrinho
        Examples:
            | produto               |
            | Ingrid Running Jacket |