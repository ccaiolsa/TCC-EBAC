Feature: US001 - Adicionar item ao carrinho



    Scenario Outline: CT01 - Adicionar item ao carrinho com sucesso
        Given o usuário estiver na home page
        When digitar "<produto>" na barra de pesquisa e o usuário selecionar a cor "<cor>" e o tamanho "<tamanho>"
        Then deve aparecer a seguinte mensagem "<mensagem>"
        Examples:
            | produto               | cor    | tamanho | mensagem                                                |
            | Ingrid Running Jacket | Orange | XS      | “Ingrid Running Jacket” foi adicionado no seu carrinho. |

    Scenario Outline: CT02 - Atingir o limite máximo do mesmo produto
        Given o usuário estiver na home page
        When digitar "<produto>" na barra de pesquisa e o usuário selecionar a cor "<cor>" e o tamanho "<tamanho>"
        Then deve aparecer um popup com a mensagem "<mensagem>"
        Examples:
            | produto               | cor   | tamanho | mensagem                                                                      |
            | Ingrid Running Jacket | White | XL      | Desculpe, este produto não está disponível. Escolha uma combinação diferente. |

    Scenario Outline: CT03 - Adicionar uma quantidade além do estoque disponível
        Given o usuário estiver na home page
        When digitar "<produto>" na barra de pesquisa e o usuário selecionar a cor "<cor>" e o tamanho "<tamanho>" e a quantidade "<quantidade>"
        Then deve aparecer a seguinte mensagem não deve aparecer "<mensagem>"
        Examples:
            | produto               | cor    | tamanho | quantidade | mensagem                                                |
            | Ingrid Running Jacket | Orange | XS      | 100        | “Ingrid Running Jacket” foi adicionado no seu carrinho. |

    Scenario Outline: CT04 - Adicionar item ao carrinho antes de definir suas especificações
        Given o usuário estiver na home page
        When digitar "<produto>" na barra de pesquisa e o usuário selecionar a cor "<cor>"
        Then deve aparecer um popup com a mensagem "<mensagem>"
        Examples:
            | produto               | cor    | mensagem                                                              |
            | Ingrid Running Jacket | Orange | Selecione uma das opções do produto antes de adicioná-lo ao carrinho. |