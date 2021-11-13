const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const Token = authHeader && authHeader.split(' ')[1]

    if (!Token)
    return res.status(401).json({success: false, message:'Token not found'})

    try {
        const decoded = jwt.verify(Token, process.env.token)

        req.userId = decoded.userID
        next()
    } catch (error) {
        console.log(error)
        res.status(403).json({success: false, message: 'Invalid token'})
    }
}

module.exports = verifyToken