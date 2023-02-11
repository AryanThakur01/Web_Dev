const notFound = (req, res) => res.status(404).send(`ERROR 404! Page Not Found`);

module.exports = notFound;