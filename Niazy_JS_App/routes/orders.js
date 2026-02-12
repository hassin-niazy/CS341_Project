var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.post('/', function(req, res) {
    // month selector
    const month = req.body.month;

    const ordersByMonth = { //using some static data to fill the months section
        Jan: [
            { topping: "plain", quantity: 28 },
            { topping: "cherry", quantity: 53 },
            { topping: "chocolate", quantity: 22 }
        ],
        Feb: [
            { topping: "plain", quantity: 25 },
            { topping: "cherry", quantity: 28 },
            { topping: "chocolate", quantity: 38}
        ],
        Mar: [
            { topping: "plain", quantity: 50 },
            { topping: "cherry", quantity: 68 },
            { topping: "chocolate", quantity: 18}
        ],
        Apr: [
            { topping: "plain", quantity: 56 },
            { topping: "cherry", quantity: 24 },
            { topping: "chocolate", quantity: 68}
        ],
        May: [
            { topping: "plain", quantity: 36 },
            { topping: "cherry", quantity: 75 },
            { topping: "chocolate", quantity: 58}
        ],
        Jun: [
            { topping: "plain", quantity: 50 },
            { topping: "cherry", quantity: 80 },
            { topping: "chocolate", quantity: 88}
        ],
        Jul: [
            { topping: "plain", quantity: 52 },
            { topping: "cherry", quantity: 83 },
            { topping: "chocolate", quantity: 68}
        ],
    };

    res.json(
                //orderlist by month
                {
                    month: month,
                    orders: ordersByMonth[month] || []
                }
            );
});

module.exports = router;