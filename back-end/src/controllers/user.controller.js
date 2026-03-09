import User from "../models/user.js";

const getUserPage = async (req, res) => {
    try {
        const result = await User.find({});

        return res.status(200).json({
            data: result
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Email hoặc mật khẩu không đúng"
            });
        }
        // So sánh password trực tiếp, TEST THÔI CHƯA PHẢI THẬT
        if (password !== user.password) {
            return res.status(400).json({
                message: "Email hoặc mật khẩu không đúng"
            });
        }

        return res.status(200).json({
            message: "Login success",
            user
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

export default getUserPage;