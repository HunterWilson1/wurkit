const express = require('express');

const router = express.Router()

//gets all
router.get('/', (req, res) => {
    res.json()
})

//gets one
router.get('/:id', (req, res) => {
    res.json()
})

//makes new
router.post('/', (req, res) => {
    res.json()
})

//deletes one
router.delete('/:id', (req, res) => {
    res.json()
})

//updates one
router.put('/:id', (req, res) => {
    res.json()
})
module.exports = router;