const { Router, response } = require('express')
const User = require('../models/User')
const router = Router()

// api/auth/register
router.post('/register', async (request, response) => {
    try {
        const { email, password } = request.body
    }
    catch (e) {
        response.status(500).json({ message: "Something went wrong, please try again" })
    }
})


// api/auth/login
router.post('/login', async (request, response) => {

})




module.exports = router