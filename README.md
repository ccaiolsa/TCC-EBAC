# TCC-EBAC
Trabalho de conclusão de curso de Engenharia de Qualidade da EBAC

# Branches
Main - Local aonde estarão armazenadas as specs de testes
Audit - Local aonde estarão armazenados os testes de performance e seus relatórios
Reports - Local aonde estarão armazenados os relatórios dos teste UI, moblie e API

# Objetivos
Avaliar todo conhecimento adquirido quanto a análise de qualidade de sistemas (tanto web quanto mobile). Para isso, serão realizados de diferentes níveis como: testes de componentes, de sistema, aceitação. Assim como testes não funcionais como teste de carga.

# O que será testado?
Para testes web, será testado uma plataforma criada pela própria EBAC que será executada localmente através do docker-compose.yml
Porta: http://localhost:80

Para testes mobile, será testada também um apk da própria EBAC, o qual só está disponível no Banco de Dados do SauceLabs.

Enfim, para testes API, será testad uma terceira plataforma que simula um e-commerce de livros o qual será executado localmente na porta http://localhost:3000


# Comandos importantes
Testes Web
- Buildando a plataforma ebacshop
docker compose up

- Executanto testes com cypress + cucumber
npm run test:ui
    - Os relatórios estarão armazenados no seguinte endereço: TCC-EBAC\tests\reports\mochawesome-reporter

Testes mobile
- Execução do appium
appium

- Executando testes com WebdriverIO + cucumber
npm run test:mobile
    - Os relatórios estarão armazenados no seguinte endereço: TCC-EBAC\tests\reports\allure-results

Testes API
- Subir plataforma local
Seguir o README.md dentro da pasta hub-de-leitura-integrado/