Feature: US002 - Login na plataforma



    Scenario Outline: CT01 - Realizar login com sucesso
        Given que o usuário esteja na página de login
        When o usuário inserir o email "<e-mail>" e senha "<senha>"
        Then o usuário deve ser redirecionado para a página do perfil do usuário
        Examples:
            | e-mail     | senha         |
            | user1_ebac | psw!ebac@test |

    Scenario Outline: CT02 - Tentar realizar login com email inválido
        Given que o usuário esteja na página de login
        When o usuário inserir o email "<e-mail>" e senha "<senha>"
        Then a seguinte mensagem deve aparecer: "<mensagem>"
        Examples:
            | e-mail    | senha         | mensagem                                                                                                                                   |
            | user1_eba | psw!ebac@test | Erro: O usuário user1_eba não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail. |

    Scenario Outline: CT03 - Tentar realizar login com senha inválida
        Given que o usuário esteja na página de login
        When o usuário inserir o email "<e-mail>" e senha "<senha>"
        Then a seguinte mensagem deve aparecer: "<mensagem>"
        Examples:
            | e-mail     | senha        | mensagem                                                                          |
            | user1_ebac | psw!ebac@tes | Erro: A senha informada para o usuário user1_ebac está incorreta. Perdeu a senha? |

    Scenario Outline: CT04 - Tentar realizar login com email e senha inválidos
        Given que o usuário esteja na página de login
        When o usuário inserir o email "<e-mail>" e senha "<senha>"
        Then a seguinte mensagem deve aparecer: "<mensagem>"
        Examples:
            | e-mail    | senha        | mensagem                                                                                                                                    |
            | user1_eba | psw!ebac@tes | Erro: O usuário user1_eba não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail. |