const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret', {expiresIn: '1h'})
}

const loginUser = async (req, res) => {
    
};

const signupUser = async (req, res) => {
    const { email, password } = req.body 
        
        try {
            const user = await User.signup(email, password);

            const token = createToken(user._id);

            res.status(200).json({ email, token });
        } catch (error) {
            res.status(400).json({err: err.message});
        }
    
};

module.exports = { loginUser, signupUser };