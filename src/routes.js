const router = require('express').Router();
const crawlerController = require('./controllers/crawlerController');

router.post('/fetch', crawlerController.fetch);

module.exports = router;