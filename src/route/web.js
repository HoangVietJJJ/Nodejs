import express from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import homeControllers from "../controllers/homeControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);
    return app.use("/", router);
}

module.exports = initWebRoutes;