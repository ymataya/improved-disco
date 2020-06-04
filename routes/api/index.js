const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require('./google');

// Book routes-- already at /api
router.use("/books", bookRoutes);
router.use('/google', googleRoutes);

module.exports = router;
