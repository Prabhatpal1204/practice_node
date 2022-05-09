const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token.split(' ')[1];
        console.log(token);
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        console.log(decode);
        req.userData = decode;
        next();
    } catch (err) {
        res.status(401).json({
            message: 'Auth check Fail'
        });
    }
};