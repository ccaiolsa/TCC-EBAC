# Trabalho de Conclusão de Curso Quality Assurance

# Branches
- **Main -** Branch destinada às suítes de testes e relatórios gerados localmente
- **Reports -** Branch destinada aos relatórios gerados via workflow

# Objetivos
Aplicar todo conhecimento adiquirido durante o curso de Engenharia de Qualidade de Software nas aplicações: Loja Ebacshop nas versões web e mobile e Hub de Leitura Integrado.

# O que será testado?
**Testes UI:** Os fluxos padrões e alternativos das demais funcionalidades do sistema, como:
 - login
 - carrinho de compras
 - cupom
 - perfil de usuário
 - cadastro de usuário
 - checkout

 Um arquivo docker-compose.yml será necessário para subir o servidor local e ficará exposta na porta: http://localhost:80

**Testes Mobile:** Será utilizado o SauceLabs como ambiente de teste e como repositório para o aplicativo, mas as podendo ser facilmente configurada alterando alguns parâmetros no workflow (**ENVIRONMENT**).

**Testes de API:** Alguns fluxos testados nos Testes UI não serão replicado aqui, por se tratar de outra plataforma, funcionalidades como:
- login
- carrinho de compras
- perfil de usuário
- cadastro de usuário
- checkout

Além das requisições, serão feitos **testes de contrato** localizados em ./suites/API/schema/.
Um arquivo Dockefile será necessário para subir um servidor local que ficará na porta http://localhost:3000

**Testes de Performance:** Foi realizado um **Load Test** na mesma plataforma utilizada nos **Testes de API**. Os testes avaliaram apenas as seguintes funcionalidades:
- login 
- carrinho

**Parâmetros utilizados:** 20 VU, Ramup de 20 seg. com duração de 2 min.

# Stacks utilizadas
- **Testes UI -** Cypress + mochawesome reporter + Cucumber
- **Testes mobile -** wdio + allure reporter + cucumber + appium
- **Testes API -** Jest + supertest + joi + v8
- **Teste performance -** k6

# Comandos importantes

## Testes web
Buildando container e subindo servidor

```bash 
docker compose up -d --build
```

Executando testes Cypress
```bash 
npm run test:ui
```
Relatórios estarão em ./suites/reports/UI/mochawesome-reporter

## Testes mobile
Executando appium
```bash
appium
```

Executando teste mobile
```bash 
npm run test:mobile
```

## Testes api
Subindo a platorma hub de leitura integrado

```bash 
cd hub-de-leitura-integrado
npm install
npm run start
```

Executando testes api
```bash 
npm run test:api
```

## Teste de carga
No mesmo servidor local do Teste de api.

Faça o login no k6 Cloud
```bash
k6 cloud login --token <YOUR_K6_API_TOKEN> --stack <YOUR_STACK_URL_OR_SLUG>
```

Executando teste de carga localmente e gerando relatório no k6 Cloud (email e senha foram armazenados na plataforma)
```bash
npm run k6:login
npm run k6:carrinho
```

Executar localmente (sem k6 Cloud)
```bash
npm run k6:perf
```


