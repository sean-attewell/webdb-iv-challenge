const express = require('express');
const knex = require('knex');
const server = express();
const db = require('./database/dbHelpers');;

server.use(express.json());

// get all dishes
server.get('/api/dishes', async (req, res) => {
    try {
        const allDishes = await db.getDishes();
        res.status(200).json(allDishes);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// get dish by ID and list of related recipes
server.get('/api/dishes/:id', async (req, res) => {
    try {
        const dish = await db.getDish(req.params.id);
        if (dish.length) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: `id ${req.params.id} doesn't exist ` })
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

// POST dish
server.post('/api/dishes/', (req, res) => {
    if (!req.body.dish_name) {
        res.status(400).json({ error: "Please enter dish name" });
    } else {
        db.addDish(req.body)
            .then(arrayOfId => {
                res.status(201).json(arrayOfId)
            })
            .catch(err => {
                res.json({ error: "Some useful error message" });
            })
    }
});

// get all recipes including the dish they belong to
server.get('/api/recipes', async (req, res) => {
    try {
        const allRecipes = await db.getRecipes();
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// POST recipe
server.post('/api/recipes/', (req, res) => {
    if (!req.body.recipe_name || !req.body.instructions || !req.body.dish_id) {
        res.status(400).json({ error: "Please enter recipe_name, instructions and dish_id" });
    } else {
        db.addRecipe(req.body)
            .then(arrayOfId => {
                res.status(201).json(arrayOfId)
            })
            .catch(err => {
                res.json({ error: "Some useful error message" });
            })
    }
});


const port = 3300;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
