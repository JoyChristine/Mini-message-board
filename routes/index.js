const { Router } = require('express');
const express = require('express');
const router = express.Router();

const messages = [{
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Good morning!",
        user: "John",
        added: new Date()
    },
    {
        text: "Good night!",
        user: "James",
        added: new Date()
    }
];


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Mini Message Board',
        messages
    });
});

router.get('/new', function(req, res, next) {
    res.render('form', {
        title: 'Add your message'
    });
});


router.post('/new', (req, res, next) => {
    let newMessage = {
        text: req.body.message,
        name: req.body.name,
        added: new Date()
    }
    messages.push(newMessage);
    res.redirect('/');
});
module.exports = router;