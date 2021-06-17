var express = require("express");
const { app } = require("../app.js");
require("express-router-group");
const homeCtl = require("../controllers/HomeController.js");
const cors = require('cors');

const webFrontRouter = express.Router();
const webRoutes = require("./web/web");
const apiRoutes = require("./api/api.js");

webFrontRouter.get("/", (req, res) => {
    homeCtl.landingPage(req, res);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

app.use("/", webFrontRouter);
app.use("/", webRoutes);
app.use("/", apiRoutes);

module.exports = app;
