const User = require('../models/User')

module.exports = {
    registerForm(req, res) {
        return res.render("user/register")
    },
    async post(req, res) {

    return res.send('Cadastro finalizado com sucesso!')
    }
}