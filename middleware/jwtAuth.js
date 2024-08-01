const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (user) => {
    return jwt.sign(user, process.env.secret_key, { expiresIn: '15m'});
  },
  authenticateToken: async (req, res, next) => {
    console.log("authorization");
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null)
      return res
        .status(401)
        .json({
          error: "You are not authorized to use this resource!",
          statusCode: 401,
          status: "Unauthorized",
        });

    jwt.verify(token, process.env.secret_key, (err, user) => {
      if (err) return res.status(403).json(err);
      req.user = user;
      next();
    });
  },
};
