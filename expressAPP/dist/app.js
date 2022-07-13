"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const addNum_controller_1 = require("./controllers/addNum.controller");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let corsOptions = {
    origin: ['*'], // * for all origin
};
app.use(cors(corsOptions));
// Register API Endpoints of controllers here
app.get("/", (req, res) => {
    res.send("Hi");
});
app.use('/', addNum_controller_1.addNumRouter);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map