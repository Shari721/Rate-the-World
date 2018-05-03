const router = require("express").Router();
const articleController = require("../../controllers/userController");

// Matches with "/api/articles"
router.route("/user")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("user/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
