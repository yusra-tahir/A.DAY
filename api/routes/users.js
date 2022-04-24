const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.route("/").get(usersController.index).post(usersController.create);

router
  .route("/:id")
  .get(usersController.show)
  .delete(usersController.delete)
  .put(usersController.update);

module.exports = router;