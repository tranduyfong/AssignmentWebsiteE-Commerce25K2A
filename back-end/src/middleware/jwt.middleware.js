const jwt = require('jsonwebtoken');
require('dotenv').config();

const middlewareController = {
    checkValidJWT: (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: "Không có token"
            });
        }

        try {
            const dataDecoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(dataDecoded);

            req.user = dataDecoded;
            next();
        } catch (err) {
            console.log(err);
            res.status(401).json({
                data: null,
                message: "Token không hợp lệ hoặc hết hạn!"
            })
        }
    },

    roleAdmin: (req, res, next) => {
        req.user.role !== "admin"
            ? res.status(403).json({ message: "Không có quyền" })
            : next();
    },

    roleStaff: (req, res, next) => {
        req.user.role !== "admin" || req.user.role !== "staff"
            ? res.status(403).json({ message: "Không có quyền" })
            : next();
    }
}

module.exports = { middlewareController };