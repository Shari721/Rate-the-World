const router = require("express").Router();
const userRoutes = require("./userRoutes");
const browse = require("./browse");

// NYT routes
router.use("/user", userRoutes);

router.use("/browse", browse);

module.exports = router;
