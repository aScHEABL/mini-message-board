const express = require('express');
const router = express.Router();

const messages = [
  {
    user: "Amando",
    text: "Hi there!",
    added: new Date()
  },
  {
    user: "Charles",
    text: "Hello World!",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message_obj: messages });
});

module.exports = router;
