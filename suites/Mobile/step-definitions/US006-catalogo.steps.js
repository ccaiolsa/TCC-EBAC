const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const home = require('../pageobjects/home.page')
const catalogo = require('../pageobjects/catalogo.page')

Given(`que o usuário esteja na página de busca`, async() => {
    await home.acessarCatalogo()
});

When(/^o usuário inserir "(.*)" e filtrar por "(.*)"$/, async(palavraChave, filtro) => {
    await catalogo.catalogoPersonalizado(palavraChave, filtro)    
});

When(/^o usuário inserir "(.*)"$/, async(palavraChave) => {
    await catalogo.catalogoPersonalizado(palavraChave, '')    
});

When(/^o usuário selecionar filtro "(.*)"$/, async(filtro) => {
    await catalogo.catalogoPersonalizado('', filtro)    
});

Then(`o usuário ter acesso à um catálogo de produtos personalizado`, async() => {
    await expect(catalogo.comparadorPRodutos()).toBeTruthy()
});

Then(/^o usuário ter acesso à um catálogo com o termo "(.*)"$/, async(termo) => {
    await expect(catalogo.produto).toHaveText(expect.stringContaining(termo))
});
