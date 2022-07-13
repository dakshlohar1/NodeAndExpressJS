"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumRouter = void 0;
const express = require("express");
exports.addNumRouter = express.Router();
// Make Endpoints Here
exports.addNumRouter.post("/add/", (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 + num2;
    res.json(JSON.stringify({ result: 3 }));
});
//# sourceMappingURL=addNum.controller.js.map