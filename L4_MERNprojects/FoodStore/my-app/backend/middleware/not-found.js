const notFound = (req, res) => {
    res.status(404).json({ msg: "Error 404!!", requested: `${req.url}` })
}

module.exports = notFound