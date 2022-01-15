const User = require("../models/users.model");

const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    const user = await User.findOne({ where: { id: uid } });
    if (!user) throw new Error();
    req.user = user.dataValues;
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;
