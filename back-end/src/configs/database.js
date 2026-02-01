const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log(err));
}

module.exports = connection;