const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.index);
// {
//     "title": "Xin title 1",
//     "content": "content 1",
//     "authorId": "2"
// }
module.exports = router;
