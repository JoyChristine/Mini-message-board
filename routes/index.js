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
    }
];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Mini Message Board',
        messages,
    });
});

router.get('/new', (req, res, next) => {
    res.render('form', {
        title: 'Add your message'
    });
});


router.post('/new', function(req, res, next) {
    messages.push({
        text: req.body.message,
        name: req.body.name,
        added: new Date()
    });
    res.redirect('/')
});
module.exports = router;