const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
}

let users = [
    {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games']
    },
    {
        name: 'Brenda Smith',
        age: 33,
        hairColor: 'brown',
        hobbies: ['reading', 'golf', 'tennis']
    },
    {
        name: 'Jane Gracia',
        age: 37,
        hairColor: 'black',
        hobbies: ['maths', 'cooking', 'cricket']
    }
];

let products = [
    {
        name: 'Flat-screen TV',
        price: '$300',
        description: 'Huge LCD screen, a great deal',
        rating: 4.5
    },
    {
        name: 'Basketball',
        price: '$20',
        description: 'Huge LCD screen, a great deal',
        rating: 3.5
    },
    {
        name: 'Running Shoes',
        price: '$120',
        description: 'State-of-art',
        rating: 4.2
    },

];

app.get('/current-user', (req, res) => {
    res.json(currentUser)
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.json(users.find(user => user.id === id))
})

app.post('/users/:id', (req, res) => {
    const {id} = req.params;
    const {user: updatedUser} = req.body;
    users = user.map(user => user.id === id ? updatedUser : user);
    res.json(users.find(user => user.id === id))
})

app.get('/users', (req, res)=>{
    res.json(users)
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    res.json(products.find(product => product.id === id))
})

app.get('/products', (req, res)=>{
    res.json(products)
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})
