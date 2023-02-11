const notFound = (req, res) =>{
    res.status(404).send('route dose not exist');
}

module.exports = notFound;