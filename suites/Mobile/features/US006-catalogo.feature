Feature: US006 - Catálogo de produtos


    Scenario Outline: CT01 - Acessar catálogo de produtos selecionando categoria e filtro de busca
        Given que o usuário esteja na página de busca
        When o usuário inserir "<palavraChave>" e filtrar por "<filtro>"
        Then o usuário ter acesso à um catálogo de produtos personalizado
        Examples:
            | palavraChave | filtro               |
            | camiseta     | Price -- Low to high |

    Scenario Outline: CT02 - Acessar catálogo de produtos por categoria
        Given que o usuário esteja na página de busca
        When o usuário inserir "<palavraChave>"
        Then o usuário ter acesso à um catálogo com o termo "<termo>"
        Examples:
            | categoria     | termo |
            | pantsclothing | pant  |

    Scenario Outline: CT03 - Acessar catálogo de produtos utilizando filtro de produtos
        Given que o usuário esteja na página de busca
        When o usuário selecionar filtro "<filtro>"
        Then o usuário ter acesso à um catálogo de produtos personalizado
        Examples:
            | filtro               |
            | Price -- Low to high |