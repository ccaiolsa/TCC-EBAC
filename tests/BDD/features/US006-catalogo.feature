Feature: US006 - Catálogo de produtos



    Scenario Outline: CT01 - Acessar catálogo de produtos selecionando categoria e filtro de busca
        Given que o usuário esteja na página de busca
        When o usuário selecionar <categoria>
        And e inserir <palavra-chave> na barra de busca
        And selecionar a opção: <filtro>
        Then o usuário deve ter acesso ao catálogo de com produtos selecionados
        Examples:
            | categoria     | palavra-chave | filtro                              |
            | pantsclothing | cr            | Ordenar por preço: menor para maior |

    Scenario Outline: CT02 - Acessar catálogo de produtos por categoria
        Given que o usuário esteja na página de busca
        When o usuário selecionar a categoria <categoria>
        And clicar em buscas
        Then o usuário ter acesso à um catálogo de produtos com essas categorias
        Examples:
            | categoria     |
            | pantsclothing |

    Scenario Outline: CT03 - Realizar busca de produtos apenas digitando seu nome
        Given que o usuário esteja na página de busca
        When o usuário deve digitar: <produto>
        Then o usuário ter acesso aos produtos com aquele nome como sugestão
        Examples:
            | produto |
            | Pants   |

    Scenario Outline: CT04 - Acessar catálogo de produtos utilizando filtro de produtos
        Given que o usuário esteja na página de busca
        When o usuário selecionar: <filtro>
        Then o usuário ter acesso ao catálogo de produtos filtrado
        Examples:
            | filtro                              |
            | Ordenar por preço: menor para maior |