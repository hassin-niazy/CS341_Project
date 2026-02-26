//Javascript for inserting new order to the database.
//Author: Hassinullah Niazy

var express = require('express');
var router = express.Router();
var db = require('./dbms_promise');

//inserting new order to the database dynamically using post command.
router.post('/', async function(req, res) {
    try {
        const quantity = req.body.quantity;
        const t_id = req.body.topping;
        const notes = req.body.notes;

        //calculate the date for the order.
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;  
        const year = currentDate.getFullYear();

        //insert new order in the database
        const query = `
            INSERT INTO orders (t_id, quantity, notes, month, year)
            VALUES (?, ?, ?, ?, ?)
        `;

        //order inserted success.
        const values = [t_id, quantity, notes, month, year];
        await db.dbquery(query, values);

        res.json({ message: "Order inserted successfully" });

    } catch (err) {
        //failed to insert order in the system.
        console.error(err);
        res.status(500).send("Database insert error");
    }
});

module.exports = router;