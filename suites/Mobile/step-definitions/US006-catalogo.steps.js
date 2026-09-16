const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const home = require('../pageobjects/home.page')
const catalogo = require('../pageobjects/catalogo.page')

Given(`que o usuário esteja na página de busca`, async() => {
    await home.acessarCatalogo()
});

When(`o usuário inserir {string} e filtrar por {string}`, async(palavraChave, filtro) => {
    await catalogo.catalogoPersonalizado(palavraChave, filtro)    
});

When(`o usuário inserir {string}`, async(palavraChave) => {
    await catalogo.catalogoPersonalizado(palavraChave, '')    
});

When(`o usuário selecionar filtro {string}`, async(filtro) => {
    await catalogo.catalogoPersonalizado('', filtro)    
});

Then(`o usuário ter acesso à um catálogo de produtos personalizado`, async() => {
    await expect(catalogo.comparadorPRodutos()).toBeTruthy()
});

Then(`o usuário ter acesso à um catálogo com o termo {string}`, async(termo) => {
    await catalogo.produto.toHaveText(expect.stringContaining(termo))
});
