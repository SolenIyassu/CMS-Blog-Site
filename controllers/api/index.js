const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRouters = require("./postRoutes");

router.use("./user", userRoutes);
router.use("./post", postRoutes);
router.use("./comment", commentRoutes);

modeule.export = router;
