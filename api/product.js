module.exports = (app, text) => {
    function save(req, res) {
        res.send("Save" + text);
    }
    
    function get(req, res)  {
        res.send("Get" + text);
    }
    
    app.post('/product', save);
    app.get('/product', get);

    return  {save, get};
}