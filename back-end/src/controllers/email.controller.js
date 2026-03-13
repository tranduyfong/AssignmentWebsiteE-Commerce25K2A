const sendMail = require('../configs/email');

const sendMailTest = async (req, res) => {
    try {
        const { to, subject, content } = req.body;

        if (!to || !subject || !content) return res.status(400).json({ message: "Missing fields" });

        await sendMail({
            to,
            subject,
            html: `
            <h1>${subject}</h1>
            <p>${content}</p>
            `
        });
        res.json({ message: 'Send mail success ✅' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Send mail failed ❌' });
    }
}

module.exports = sendMailTest;