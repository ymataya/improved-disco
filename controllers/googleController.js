const axios = require('axios');

module.exports = {
    searchQuery: function(req, res) {
        console.log("hitting")
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}`)
            .then((response) => {
                console.log(response.data)
                res.json(response.data)
            }).catch((error) => {
                console.log(error)
                res.json(error)
            })
    }
}