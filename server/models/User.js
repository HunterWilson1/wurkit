const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function(email, password) {
  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error('Email already used');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};


userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw new Error('Fill out the fields');
    }

    const existingUser = await this.findOne({ email });

    if (!existingUser) {
      throw new Error('Invalid login');
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        throw new Error('Invalid login');
    }

    return existingUser;
};



module.exports = mongoose.model('User', userSchema);
