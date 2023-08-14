module.exports = app => {
    const note = require('../controller/note.controller');

    var router = require('express').Router();

    router.post('/create', note.create);
    router.get('/read', note.read);
    router.put('/update/:id', note.update);
    router.delete('/delete/:id', note.delete);


    app.use('/api/note', router);
}