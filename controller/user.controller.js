const { createRandomId } = require('../extra/number.extra');
const db = require('../model');
const User = db.user;
const Op = db.Sequelize.Op;


exports.login = async(req, res) => {
    const {email, password} = req.body;
    try {
        if(!email && !password){
            return res.status(400).send({
                message: "Your information is not empty"
            })
        }

        const oldUser = await User.findOne({where: {email}});
        if(!oldUser){
            return res.status(400).send({
                message: "This user is not exist"
            })
        };

        return res.status(200).send({
            result: oldUser,
            message: "Login is successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


exports.register = async(req, res) => {
    const {email, password} = req.body;
    try {

        if(!email && !password){
            return res.status(400).send({
                message: "Your information is not empty"
            })
        }

        const oldUser = await User.findOne({where: {email}});
        if(oldUser){
            return res.status(400).send({
                message: "This user is exist"
            })
        }

        const id = createRandomId(10);
        const newUser = {
            id, 
            email,
            password
        }

        const result = await User.create(newUser);

        return res.status(201).send({
            result,
            message: "Register is successfully"
        })

    } catch (error) {
        console.log(error);
    }
}