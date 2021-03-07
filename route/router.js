const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res) {
    res.render('pages/index', {
        title: 'Travel Date',  
    })
})

router.get('/login', function (req, res) {
    res.render('pages/login', {
        title: 'login',
    })
})


router.get('*', function (req, res) {
    res.status(404).render('pages/404', {
        url: req.url,
        title: 'Error 404',
    })
})

module.exports = router;