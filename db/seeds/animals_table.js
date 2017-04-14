exports.seed = function(knex) {
    return knex('snacks').del()
        .then(() => {
            return knex('snacks').insert([{
                    id: 1,
                    name: 'Buttercup',
                    image_url: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
                    species: 'Cat',
                    age: 2,
                    description: 'Buttercup loves you',
                    adopted: false
                },
                {
                    id: 2,
                    name: 'Rigby',
                    image_url: 'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg',
                    Species: 'Dog',
                    description: 'Hi there',
                    adopted: false
                },
                {
                    id: 3,
                    name: 'Boris',
                    image_url: 'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/3747D2B7-8A25-494F-B9E21DAE707117C9/thul-1423f68f-37f8-51c0-be55-f76a64f3a22f.jpg?response-content-disposition=inline',
                    species: 'Dog',
                    description: 'Please adopt me. I need love',
                    adopted: false
                }
            ])
        }).then(() => {
            return knex.raw(
                "SELECT setval('animals_id_seq', (SELECT MAX(id) FROM animals));"
            )
        })
}
