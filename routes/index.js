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
]


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Message Board', messages });
})

router.get("/new", function(req, res, next) {
  res.render("form")
})

router.post("/new", (req, res, next) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  messages.push({ user: messageText, text: messageText, added: new Date() });
  res.redirect("/")
})

module.exports = router;
