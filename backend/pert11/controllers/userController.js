const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('user', { users });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
