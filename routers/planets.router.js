const router = require('express').Router();

const {planetsController} = require('../controllers');

router.get('/:id', planetsController.getPlanetById);

module.exports = router;
