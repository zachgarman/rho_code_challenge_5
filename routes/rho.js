/** --- DO NOT MODIFY --- **/
var router = require('express').Router();

var rho = [
  'Adrian Flak',
  'Alexander Whitaker',
  'Aly Boyd',
  'Barrett Amsrud',
  'Connor Hauck',
  'Elisa Lee',
  'Jacqueline Torborg',
  'Jeffrey Miller',
  'Julie Mike',
  'Kelly O\'Neil',
  'Laura Abend',
  'Levy Kohout',
  'Leya Yacob',
  'Matthew Eng',
  'Patrick Hiniker',
  'Paul Katchmark',
  'Vaughn Prosser',
  'Zachary Garman',
];

router.get('/', function (req, res) {
  res.send(rho);
});

module.exports = router;
