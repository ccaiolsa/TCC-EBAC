Feature: US006 - Catálogo de produtos



    Scenario Outline: CT01 - Acessar catálogo de produtos selecionando categoria e filtro de busca
        Given que o usuário esteja na página de busca
        When o usuário inserir "<palavraChave>" e filtrar por "<filtro>"
        Then o usuário ter acesso à um catálogo de produtos personalizado
        Examples:
            | palavraChave | filtro                              |
            | c            | Ordenar por preço: menor para maior |

    Scenario Outline: CT02 - Acessar catálogo de produtos por categoria
        Given que o usuário esteja na página de busca
        When o usuário selecionar a categoria "<categoria>"
        Then o usuário ter acesso à um catálogo com os termos correspondentes "<termo1>" e "<termo2>"
        Examples:
            | categoria     | termo1 | termo2 |
            | pantsclothing | pant   | tight  |

    Scenario Outline: CT03 - Realizar busca de produtos apenas digitando seu nome
        Given que o usuário esteja na página de busca
        When o usuário digitar "<palavraChave>"
        Then o usuário ter acesso à um catálogo com os termos correspondentes "<termo1>" e "<termo2>"
        Examples:
        Examples:
            | palavraChave | termo1 | termo2 |
            | Pants   | pant   | tight  |   

    Scenario Outline: CT04 - Acessar catálogo de produtos utilizando filtro de produtos
        Given que o usuário esteja na página de busca
        When o usuário selecionar filtro "<filtro>"
        Then o usuário ter acesso à um catálogo de produtos personalizado
        Examples:
        Examples:
            | filtro                              |
            | Ordenar por preço: menor para maior |