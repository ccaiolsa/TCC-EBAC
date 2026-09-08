Feature: US003 - API de cupons



    Scenario Outline: CT01 - Adição de cupom de 10% em compras abaixo de R$200
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                                             |
            | EBAC10 | 9          | O valor mínimo do pedido para este cupom é R$200,00. |

    Scenario: CT02 - Adição de cupom de 10% com sucesso em compras a partir de R$200
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                              |
            | EBAC10 | 10         | Código de cupom aplicado com sucesso. |

    Scenario: CT03 - Adição de cupom de 10% com sucesso em compras acima de R$200
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                              |
            | EBAC10 | 11         | Código de cupom aplicado com sucesso. |

    Scenario: CT04 - Adição de cupom de 10% com sucesso em compras abaixo de R$600
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                              |
            | EBAC10 | 29         | Código de cupom aplicado com sucesso. |

    Scenario: CT05 - Adição de cupom de 10% em compras a partir de R$600
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                              |
            | EBAC10 | 30         | Código de cupom aplicado com sucesso. |

    Scenario: CT06 - Adição de cupom de 10% em compras acima de R$600
        Given que o usuário esteja no carrinho de compras
        When e aplicar o cupom "<cupom>" para "<quantidade>" produtos
        Then ele deverá receber a seguinte mensagem "<mensagem>"
        Examples:
            | cupom  | quantidade | mensagem                                                         |
            | EBAC10 | 31         | O valor máximo que pode ser gasto para este cupom é de R$600,00. |

