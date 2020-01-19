const express = require('express')
const app = express();
const router = express.Router()

// routes
router.get('/', (req, res) => {
    app.locals.layout = false;
    res.render('landing', { layout: false })
})

router.get('/about', (req, res) => {
    app.locals.layout = false;
    res.render('about', { layout: false })
})



module.exports = router;