import express from 'express'
const app = express
const api = express.Router()
import jwt from 'jsonwebtoken'


api.get('/', function (req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
})

api.get('/users', function (req, res) {
    const payload = {
        admin: true
    }
    let token = jwt.sign(payload, req.app.get('superSecret'), {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    })

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token,
        users: [
            {
                _id: "123412141i12hs31sdipqwelx3D4$",
                username: "silkyland",
                email: "silkyland@gmail.com",
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
    })
})

export default api