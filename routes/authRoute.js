const express = require('express')
const passport = require('passport')
const authRoute = require('../controllers/authController')
router = express.Router()

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
	'/auth/google/dashboard',
	passport.authenticate('google', { failureRedirect: '/failed' }),
	(req, res) => {
  res.redirect('/dashboard')
}
)

router.post('/auth/android/google', authRoute.googlePost)

module.exports = router