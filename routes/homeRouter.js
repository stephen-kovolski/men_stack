const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "successful get request"
    })
})


router.get('/home', (req, res) => {
    const path = process.cwd() + '/html/home.html';
        res.sendFile(path, (err) => {
            if(err) {
        res.status(500).json({
            error: err.message || err
        })
    }
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: "successfull post request"
    })
})

router.put('/:id', (req, res) => {
    res.status(200).json({
        message: "successfull put"
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: "success"
    })
})






module.exports = router;