const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

// api/auth/register
router.post(
  '/register',
  [
    check('email', "Email is incorrect ").isEmail(),
    check('password', "Minimum password lenght is 6 symbols").isLength({ min: 6 }),

  ],
  async (request, response) => {
    try {
      const errors = validationResult(require)
      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data for Sign Up'
        })
      }

      const { email, password } = request.body // get email password from frondend
      const candidate = await User.findOne({ email })

      if (candidate) {
        response.status(400).json({ message: "User already in use." })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })
      await user.save()
      response.status(201).json({ message: 'User has been created' })
    }
    catch (e) {
      response.status(500).json({ message: "Something went wrong, please try again." })
    }
  })


// api/auth/login
router.post(
  '/ login',
  [
    check('email', "Input correct email").normalizeEmail().isEmail(),
    check('password', "Input password").exists
  ],
  async (request, response) => {
    try {
      const errors = validationResult(require)
      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data for Sign in'
        })
      }
      const { email, password } = require.body
      const user = await User.findOne({ email })//checking if email is exists
      if (!user) {
        return response.status(400).json({ message: "Usern not found" })
      }
      // Checking passsword match
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return response.status(400).json({ message: "Password is incorrect try again." })
      }
      // Creating auth token
      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )
      response.json({ token, userId: user.id })
    }
    catch (e) {
      response.status(500).json({ message: "Something went wrong, please try again." })
    }
  })




module.exports = router