const notFound = (req, res) => res.status(404).json(`Route not found`);

module.exports = notFound;