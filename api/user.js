function save(req, res) {
    res.send("Save")
}

function get(req, res)  {
    res.send("Get")
}


module.exports = {save, get};