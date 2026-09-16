const joi = require('joi')


const catalogoSchema = joi.object(
    {
        books: joi.array()
            .items(
                joi.object({
                    id: joi.number().integer(),
                    title: joi.string(),
                    author: joi.string(),
                    description: joi.string(),
                    category: joi.string(),
                    isbn: joi.string(),
                    editor: joi.string(),
                    language: joi.string(),
                    publication_year: joi.date(),
                    pages: joi.number().integer(),
                    format: joi.string(),
                    total_copies: joi.number().integer(),
                    available_copies: joi.number().integer(),
                    cover_image: joi.string(),
                    created_at: joi.date(),
                    updated_at: joi.date(),
                    is_available: joi.boolean()

                })
            )

    })

const { error, value } = catalogoSchema.validate(
    {
        "books": [
            {
                id: 1,
                title: "Dom Casmurro",
                author: "Machado de Assis",
                description: "Romance clássico da literatura brasileira",
                category: "Literatura Brasileira",
                isbn: "978-85-260-1318-3",
                editor: "Editora Companhia das Letras",
                language: "Português",
                publication_year: 1899,
                pages: 256,
                format: "Físico",
                total_copies: 5,
                available_copies: 3,
                cover_image: "dom-casmurro.jpg",
                created_at: "2024-01-15T10:30:00Z",
                updated_at: "2024-01-20T15:45:00Z",
                is_available: true
            }
        ]

    })

    module.exports = {catalogoSchema}