//Javascript for inserting new order to the database.
//Author: Hassinullah Niazy

var express = require('express');
var router = express.Router();
var db = require('./dbms_promise');

router.post('/', async function(req, res) {
    try {
        const quantity = req.body.quantity;
        const t_id = req.body.topping;
        const notes = req.body.notes;

        const month = 2;  
        const year = 2026;

        const query = `
            INSERT INTO orders (t_id, quantity, notes, month, year)
            VALUES (?, ?, ?, ?, ?)
        `;

        await db.dbquery(query);

        res.json({ message: "Order inserted successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).send("Database insert error");
    }
});

module.exports = router;