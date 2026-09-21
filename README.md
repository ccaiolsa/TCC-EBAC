# Trabalho de Conclusão de Curso Quality Assurance

# Branches
Main - Branch destinada às suítes de testes e relatórios gerados localmente
Reports - Branch destinada aos relatórios gerados via workflow

# Objetivos
Aplicar todo conhecimento adiquirido durante o curso de Engenharia de Qualidade de Software nas aplicações: Loja Ebacshop nas versões web e mobile e Hub de Leitura Integrado.

# O que será testado?
Para testes web, será executado um docker-compose.yml para subir o servidor local. Aqui serão feitos testes de User Interface, replicando os fluxos mais prováveis de um usuário padrão.

Porta: http://localhost:80

Para testes mobile, será utilizado o SauceLabs como ambiente de teste e repositório para o aplicativo por padrão.

Para testes API, será "buildada" uma imagem a partir de um Dockerfile para subir o servidor local. Aqui serão testados algumas das Histórias de Usuário (US) definidas nos testes web (apenas os testes aplicáveis a essa nova plataforma)
Porta http://localhost:3000

Por fim, para testes de performance, foi utilizada a plataforma hub de leitura integrado para testes de carga em duas funcionalidades: Login (US002) e carrinho (US001). Os parâmetros aplicados foram: 20 VU, Ramup de 20 seg. com duração de 2 min.

# Stacks utilizadas
Testes UI - Cypress + mochawesome reporter + Cucumber
Testes mobile - wdio + allure reporter + cucumber + appium
Testes API - Jest + supertest + joi + v8
Teste performance - k6

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


