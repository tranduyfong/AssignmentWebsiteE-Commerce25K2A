const bcrypt = require("bcrypt");

const hashPassword = async (value) => {
    return await bcrypt.hash(value, 10);
}

const comparePassword = async (value, hashPassword) => {
    return await bcrypt.compare(value, hashPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}
