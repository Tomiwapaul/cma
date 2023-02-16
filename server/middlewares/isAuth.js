const jwt = require('jwt');




const isAuth = (req, res, next) => {
    const header = req.headers['authorization'] || req.headers['Authorization'];
    const token = header.split(' ')[1];
    
    if (!header || !token) {
        return res.status(401).json({ message: 'Not Authorized' });
        return;
    
    }
};

module.exports = isAuth;