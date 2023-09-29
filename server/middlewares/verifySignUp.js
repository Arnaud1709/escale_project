const { ROLES } = require("../models");
const User = require("../models/user.model");

exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const existingUsername = await User.findOne({ username: req.body.username });
    const existingEmail = await User.findOne({ email: req.body.email });

    if (existingUsername) {
      return res.status(400).send({ message: "Failed! Username is already in use!" });
    }

    if (existingEmail) {
      return res.status(400).send({ message: "Failed! Email is already in use!" });
    }

    next();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
      }
    }
  }

  next();
};