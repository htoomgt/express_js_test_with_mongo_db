var express = require("express");
const { app } = require("../app.js");
require("express-router-group");
const homeCtl = require("../controllers/HomeController.js");

const webFrontRouter = express.Router();
const webRoutes = require("./web/web");
const apiRoutes = require("./api/api.js");

webFrontRouter.get("/", (req, res) => {
    homeCtl.landingPage(req, res);
});

app.use("/", webFrontRouter);
app.use("/", webRoutes);
app.use("/", apiRoutes);

module.exports = app;
