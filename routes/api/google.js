const router = require("express").Router();
const googleController = require("../../controllers/googleController");
const axios = require('axios')

// matches with /api/google
router.route("/:query")
    .get(googleController.searchQuery)

 
module.exports = router;