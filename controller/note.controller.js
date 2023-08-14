const { createRandomId } = require('../extra/number.extra');
const db = require('../model');
const Note = db.note;
const Op = db.Sequelize.Op;


exports.create = async(req, res) => {
    const {title} = req.body;
    try {
        const id = createRandomId(10);
        const newNote = {
            id, 
            title
        }

        const note = await Note.create(newNote);

        return res.status(200).send({
            result: note,
            message: "Create note is successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.read = async(req, res) => {
    try {
        const notes = await Note.findAll();
        res.status(200).send({
            notes
        })
    } catch (error) {
        console.log(error);
    }
}


exports.update = async(req, res) => {
    const id = req.params.id;
    try {
        await Note.update(req.body, {where: {id}});
        const result = await Note.findAll();
        return res.status(200).send({
            result,
            message: "Update note is successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
        await Note.destroy({where: {id}});
        const notes = await Note.findAll();
        return res.status(200).send({
            notes,
            message: "Delete note is successfully"
        })
    } catch (error) {
        console.log(error);
    }
}