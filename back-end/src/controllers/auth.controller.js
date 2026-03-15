const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { comparePassword } = require('../utils/password');
require('dotenv').config();

let refreshTokens = [];

const authControllers = {
    generateAccessToken: (user) => {
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
            name: user.name
        }
        return jwt.sign(payload, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE }
        );
    },

    generateRefreshToken: (user) => {
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
            name: user.name
        }
        return jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
            expiresIn: process.env.JWT_EXPIRE
        });
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                email: email
            });

            if (!user) throw new Error('User name is not found');

            const isMatch = await comparePassword(password, user.password);
            if (!isMatch) throw new Error('Invalid password');

            const access_token = authControllers.generateAccessToken(user);
            const refresh_token = authControllers.generateRefreshToken(user);

            res.cookie("refreshToken", refresh_token, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })
            res.status(200).json({
                data: { access_token, refresh_token }
            })
        } catch (error) {
            res.status(401).json({
                data: null,
                message: error.message
            });
        }
    },

    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            const newAccessToken = authControllers.generateAccessToken(user);
            const newRefreshToken = authControllers.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            });
            res.status(200).json({ access_token: newAccessToken })
        })
    }
}

module.exports = { authControllers }