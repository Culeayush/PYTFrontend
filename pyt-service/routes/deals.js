var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards":[
      { imageName: 'offer1',title: 'Special discount on hotel bookings', cols: 2, rows: 1 ,route:'/hotels'},
      { imageName: 'offer2',title: 'Hotels starting at just Rs.800', cols: 2, rows: 1 ,route:'/hotels'},
      { imageName: 'offer4',title: 'Get bonus discounts on holiday packages', cols: 1, rows: 1 ,route:'/hotels'},
      { imageName: 'offer',title: 'Flights starting from as low as Rs.700', cols: 1, rows: 1 ,route:'/flights'}
    ] ,
    "webCards":[
      { imageName: 'offer1',title: 'Special discount on hotel bookings', cols: 2, rows: 1 ,route:'/hotels'},
      { imageName: 'offer2',title: 'Hotels starting at just Rs.800', cols: 1, rows: 1 ,route:'/hotels'},
      { imageName: 'offer4',title: 'Get bonus discounts on holiday packages', cols: 1, rows: 2 ,route:'/hotels'},
      { imageName: 'offer',title: 'Flights starting from as low as Rs.700', cols: 1, rows: 1 ,route:'/flights'}
    ]

  }
  res.json(jsonResponse);
});

module.exports = router;
