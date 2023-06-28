const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secret = "secret"; // Replace with your actual secret key

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ err: "Token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, secret);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: "Not authorized" });
  }
};

module.exports = auth;
