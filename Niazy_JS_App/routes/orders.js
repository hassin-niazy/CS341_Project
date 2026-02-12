var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json([{
                "topping": "cherry",
                "quantity": "28",
            },
            {   
                "topping": "plain",
                "quantity": "53",
            },
            {
                "topping": "chocolate",
                "quantity": "22",
            }
        
            ]);
});

module.exports = router;