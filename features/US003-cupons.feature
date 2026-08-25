Feature: US003 - API de cupons



    Scenario Outline: CT01 - Adição de cupom de 10% em compras abaixo de R$200
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$199,00
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                                             |
            | EBAC10 | O valor mínimo do pedido para este cupom é R$200,00. |

    Scenario: CT02 - Adição de cupom de 10% com sucesso em compras a partir de R$200
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$200
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                              |
            | EBAC10 | Código de cupom aplicado com sucesso. |

    Scenario: CT03 - Adição de cupom de 10% com sucesso em compras acima de R$200
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$221
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                              |
            | EBAC10 | Código de cupom aplicado com sucesso. |

    Scenario: CT04 - Adição de cupom de 10% com sucesso em compras abaixo de R$600
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$599
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                              |
            | EBAC10 | Código de cupom aplicado com sucesso. |

    Scenario: CT05 - Adição de cupom de 10% em compras a partir de R$600
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras abaixo de R$ 600,00
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                                             |
            | EBAC10 | O valor máximo do pedido para este cupom é R$599,99. |

    Scenario: CT06 - Adição de cupom de 10% em compras acima de R$600
        Given que o usuário esteja no carrinho de compras
        When ele tiver compras acima de R$ 600,00
        And ele aplicar o cupom <cupom>
        Then ele deverá receber a seguinte mensagem <mensagem>
        Examples:
            | cupom  | mensagem                                             |
            | EBAC10 | O valor máximo do pedido para este cupom é R$599,99. |

