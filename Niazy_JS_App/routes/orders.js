/* 
This is the JS page to take track of orders.
Author: Hassinullah Niazy
Date: 02/11/2026
*/

var express = require('express');
var router = express.Router();
var db = require('./dbms_promise'); //connected Database
/* GET orders listing. */
router.post('/', async function(req, res) {
    // month selector
    const monthStr = req.body.month;

    const monthMap = {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4,
        May: 5, Jun: 6, Jul: 7, Aug: 8,
        Sep: 9, Oct: 10, Nov: 11, Dec: 12
    };

    const month = monthMap[monthStr];

    const query = `
        SELECT  t.name AS topping, SUM(o.quantity) AS quantity
        FROM orders o
        JOIN toppings t ON o.t_id = t.t_id
        WHERE o.month = ?
        GROUP BY t.name
    `;

    try {
        const result = await db.query(query, [month]);

        res.json({
            month: monthStr,
            orders: results
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error")
    }
});

module.exports = router;