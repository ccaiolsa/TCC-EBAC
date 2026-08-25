Feature: US006 - Catálogo de produtos



    Scenario: Realizar busca de produto com sucesso
        Given que o usuário esteja na página de busca
        When o usuário digitar "Ariel Roll Sleeve Sweatshirt"
        And clicar nele
        Then o usuário deve ser direcionado à página do produto 
    
    Scenario: Realizar busca utilizando a barra Categorias
        Given que o usuário esteja na página de busca
        When o usuário selecionar a categoria "Pantsclothing"
        And clicar em buscas
        Then o usuário ter acesso à um catálogo dessa categoria
