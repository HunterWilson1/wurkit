const User = require('../models/User'); // Importing the User model
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken library

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret', {expiresIn: '1h'}); // Creating a JWT token with the user ID and a secret key, expiring in 1 hour
};

const loginUser = async (req, res) => {
    const {email, password} = req.body; // Extracting email and password from the request body

    try {
        const user = await User.login(email, password); // Calling the login method of the User model to authenticate the user

        const token = createToken(user._id); // Creating a JWT token for the authenticated user

        res.status(200).json({ email, token }); // Sending the email and token in the response
    } catch (error) {
        res.status(400).json({error: error.message}); // Handling any errors that occur during login
    }
};

const signupUser = async (req, res) => {
    const { email, password } = req.body; // Extracting email and password from the request body
        
    try {
        const user = await User.signup(email, password); // Calling the signup method of the User model to create a new user

        const token = createToken(user._id); // Creating a JWT token for the newly created user

        res.status(200).json({ email, token }); // Sending the email and token in the response
    } catch (error) {
        res.status(400).json({error: error.message}); // Handling any errors that occur during signup
    }
};

module.exports = { loginUser, signupUser }; // Exporting the loginUser and signupUser functions for use in other files
