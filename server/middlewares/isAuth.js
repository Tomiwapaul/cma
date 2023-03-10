const jwt = require('jsonwebtoken');




const isAuth = (req, res, next) => {
    const header = req?.headers['authorization'] || req?.headers['Authorization'];
    const token = header?.split(' ')[1];
    
    if (!header || !token) {
        return res.status(401).json({ message: 'Not Authorized' });
        return;
    
    }

    if (req.session.user.token !== token) {
        res.status(401).json({ message: 'Not Authorized' });
        return;
    }
    jwt.verify(token, process.env.VERIFY_TOKEN_SECRET, (error, auth) => {
        if (error)  return res.status(403)
        req.auth = auth;
            next();
    });
};

module.exports = isAuth;