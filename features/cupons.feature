Feature: US003 - API de cupons



    Scenario: Realizar login com sucesso
        Given que o usuário esteja na página de login
        When o usuário inserir o email "user1_ebac" e senha "psw!ebac@test"
        Then o usuário deve ser redirecionado para a página do perfil do usuário

    Scenario: Tentar realizar login com email inválido
        Given que o usuário esteja na página de login
        When o usuário inserir o email "user1_eba" e senha "psw!ebac@test"
        Then a seguinte mensagem deve aparecer: "Erro: O usuário user1_eba não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail."
    
    Scenario: Tentar realizar login com senha inválida
        Given que o usuário esteja na página de login
        When o usuário inserir o email "user1_ebac" e senha "psw!ebac@tes"
        Then a seguinte mensagem deve aparecer: "Erro: A senha informada para o usuário user1_ebac está incorreta. Perdeu a senha?"
    
    Scenario: Tentar realizar login com email e senha inválidos
        Given que o usuário esteja na página de login
        When o usuário inserir o email "user1_eba" e senha "psw!ebac@tes"
        Then a seguinte mensagem deve aparecer: "Erro: O usuário user1_ebac não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail."