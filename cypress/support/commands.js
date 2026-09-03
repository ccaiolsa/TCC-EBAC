// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('adicionarProduto', (produto, cor, tamanho, quantidade) => {
    cy.get('[data-toggle="modal"]').eq(1).click()

    cy.get('[placeholder="Enter your search ..."]').eq(1).type(produto)
    cy.get('#ui-id-1 > :nth-child(1)').should('exist').click()

    cy.get('.woocommerce-tabs').should('be.visible')

    if (tamanho !== '') {
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()

        cy.get(`.button-variable-item-${cor}`).should('have.attr', 'aria-checked', 'true')
        cy.get(`.button-variable-item-${tamanho}`).should('have.attr', 'aria-checked', 'true')

    } else {
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get(`.button-variable-item-${cor}`).click()

    }
    cy.get('[name="quantity"]').clear().type(quantidade)
    cy.get('[name="quantity"]').should('have.value', quantidade)

    cy.get('.single_add_to_cart_button').should('be.enabled').click()
});

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[name="username"]').type(email)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="login"]').click()

});

Cypress.Commands.add('adicionarCupom', (cupom, quantidade) => {
    cy.get('.dropdown-toggle > .mini-cart-items').click();
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click();
    cy.get('[inputmode="numeric"]').clear().type(quantidade).type('{enter}');
    cy.contains('Carrinho atualizado.').should('be.visible');

    cy.get('[name="coupon_code"]').type(cupom).type('{enter}');

});

Cypress.Commands.add('confDetalhes', (Fname, Lname, Dname, email) => {

    if (email !== '') {
        if (Fname !== '' && Lname !== '' && Dname !== '') {
            cy.contains('Detalhes da conta').click()
            cy.get('[name="account_first_name"]').clear().type(Fname)
            cy.get('[name="account_last_name"]').clear().type(Lname)
            cy.get('[name="account_display_name"]').clear().type(Dname)
            cy.get('[name="account_email"]').clear().type(email)
            cy.get('[name="save_account_details"]').click()
        } else {
            cy.contains('Detalhes da conta').click()
            cy.get('[name="account_first_name"]').clear()
            cy.get('[name="account_last_name"]').clear()
            cy.get('[name="account_display_name"]').clear()
            cy.get('[name="account_email"]').clear().type(email)
            cy.get('[name="save_account_details"]').click()
        }

    } else {
        cy.contains('Detalhes da conta').click()
        cy.get('[name="account_first_name"]').clear()
        cy.get('[name="account_last_name"]').clear()
        cy.get('[name="account_display_name"]').clear()
        cy.get('[name="account_email"]').clear()
        cy.get('[name="save_account_details"]').click()
    }
});

Cypress.Commands.add('confEndereco', (Fname, Lname, país, endereço, cidade, estado, cep) => {
    if (cep !== '') {
        if (Fname !== '' && Lname !== '' && país !== '' && endereço !== '' && cidade !== '' && estado !== '') {
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
            cy.get(':nth-child(2) > .title > .edit').click()
            cy.get('form > h3').should('contain', 'Endereço de entrega')
            cy.get('[name="shipping_first_name"]').clear().type(Fname)
            cy.get('[name="shipping_last_name"]').clear().type(Lname)
            cy.get('[name="shipping_country"]').select(país, { force: true })
            cy.get('[name="shipping_address_1"]').clear().type(endereço)
            cy.get('[name="shipping_city"]').clear().type(cidade)
            cy.get('[name="shipping_state"]').clear().type(estado)
            cy.get('[name="shipping_postcode"]').clear().type(cep)
            cy.get('[name="save_address"]').click()

        } else {
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
            cy.get(':nth-child(2) > .title > .edit').click()
            cy.get('form > h3').should('contain', 'Endereço de entrega')
            cy.get('[name="shipping_first_name"]').clear()
            cy.get('[name="shipping_last_name"]').clear()
            cy.get('[name="shipping_address_1"]').clear()
            cy.get('[name="shipping_city"]').clear()
            cy.get('[name="shipping_state"]').clear()
            cy.get('[name="shipping_postcode"]').clear().type(cep)
            cy.get('[name="save_address"]').click()
        }
    } else {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('form > h3').should('contain', 'Endereço de entrega')
        cy.get('[name="shipping_first_name"]').clear()
        cy.get('[name="shipping_last_name"]').clear()
        cy.get('[name="shipping_address_1"]').clear()
        cy.get('[name="shipping_city"]').clear()
        cy.get('[name="shipping_state"]').clear()
        cy.get('[name="shipping_postcode"]').clear()
        cy.get('[name="save_address"]').click()
    }
});

Cypress.Commands.add('confCatalogo', (categoria, palavraChave, filtro) => {
    if (categoria !== '') {
        cy.visit(`/?product_cat=${categoria}&s=&post_type=product`);
    } if (palavraChave !== '') {
        cy.get('[placeholder="Enter your search ..."]').eq(1).type(palavraChave);
        cy.get('[type="submit"]').eq(1).click()
        if (filtro !== '') {
            cy.get('[placeholder="Enter your search ..."]').eq(1).type(palavraChave);
            cy.get('[type="submit"]').eq(1).click()
            cy.get('[name="orderby"]').select(filtro);
        }
    } else {
        cy.get('[name="orderby"]').select(filtro);
    }
});

Cypress.Commands.add('registrar', (email, senha) => {
    if (email !== '') {
        cy.get('[name="email"]').type(email)
    };
    if (senha !== '') {
        cy.get('[name="password"]').eq(1).type(senha)
    };
    if (email === '' || senha === '') {
        cy.get('[name="register"]').click()
    };
    cy.get('[name="register"]').click()
});

Cypress.Commands.add('checkout', (nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento, terms) => {
    if (terms == true) {
        cy.get('[name="billing_first_name"]').type(nome)
        cy.get('[name="billing_last_name"]').type(sobrenome)
        cy.get('#billing_address_1_field > label').type(endereço)
        cy.get('[name="billing_city"]').type(cidade)
        cy.get('[name="billing_postcode"]').type(cep)
        cy.get('[name="billing_phone"]').type(telefone)
        cy.get('[name="billing_email"]').type(email)
        cy.get(`#payment_method_${pagamento}`).click()
        cy.get('#terms').check()
        cy.get('#place_order').click()

    } else {
        if (nome !== '' && sobrenome !== '' && endereço !== '' && cidade !== '' && cep !== '' && telefone !== '' && email !== '') {
            cy.get('[name="billing_first_name"]').type(nome)
            cy.get('[name="billing_last_name"]').type(sobrenome)
            cy.get('#billing_address_1_field > label').type(endereço)
            cy.get('[name="billing_city"]').type(cidade)
            cy.get('[name="billing_postcode"]').type(cep)
            cy.get('[name="billing_phone"]').type(telefone)
            cy.get('[name="billing_email"]').type(email)

            cy.get(`#payment_method_${pagamento}`).click()
            cy.get('#place_order').click()

        } else {
            cy.get('#place_order').click()
        }

    }

})