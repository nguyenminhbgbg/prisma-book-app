const express = require('express');
const router = express.Router();
const ApiController = require('../app/controllers/AipController');

// api user, login, Register
router.post('/register', ApiController.register);
router.post('/login', ApiController.login);
router.get('/users', ApiController.users);
router.get('/Genres', ApiController.Genres);
router.get('/Books', ApiController.Books);
router.get('/Chapters', ApiController.Chapters);

router.get('/Chapters:id', ApiController.ChaptersId);


// api create book, and chapter
router.post('/Books/create', ApiController.createBook);

module.exports = router;
