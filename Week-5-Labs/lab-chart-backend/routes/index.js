var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /earnings:
 *   get:
 *     description: No inputs required
 *     responses:
 *       200:
 *         description: Returns the countries total earnings in imaginary shares lifetime
 */
router.get('/earnings', function(req, res, next) {

  var data = [
    {
      country: 'Dublin',
      earnings: 4000000
    },
    {
      country: 'Madrid',
      earnings: 5000000
    },
    {
      country: 'Munich',
      earnings: 7000000
    },
    {
      country: 'Paris',
      earnings: 1000000
    }
  ]
  res.json(data);
});

/**
 * @openapi
 * /sales:
 *   get:
 *     description: No inputs required
 *     responses:
 *       200:
 *         description: Returns a list of imaginary corps sales of the past 10 years
 */
router.get('/sales', function(req, res, next) {

  var data = [
    {
      country: 'Dublin',
      data: [79063, 30484, 194667, 318996, 284750, 95046, 297129, 234768, 769563, 264790, 881584, 457104],
      years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    {
        country: 'Madrid',
        data: [51497, 174954, 83370, 98740, 256520, 175560, 102011, 343176, 601641, 682320, 827838, 776244],
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    {
        country: 'Munich',
        data: [48734, 72910, 73404, 75548, 308480, 535452, 699615, 360520, 103410, 751280, 1049323, 492504],
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    {
        country: 'Paris',
        data: [62356, 128084, 65280, 170176, 225075, 288504, 263984, 373280, 734850, 286440, 572088, 418104],
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    }
  ]

  res.json(data);
});

module.exports = router;
