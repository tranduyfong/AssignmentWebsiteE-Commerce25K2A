const getHomePage = (req, res) => {
    res.send('Home page');
}

const getIntroductPage = (req, res) => {
    res.send('Introduct page');
}

module.exports = { getHomePage, getIntroductPage };