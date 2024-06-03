const User = require("../models/User");

const adminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send({ message: "Access Denied, admin only 🤥" });
  }

  next();
};

module.exports = adminMiddleware;
