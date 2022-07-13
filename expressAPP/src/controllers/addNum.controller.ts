import * as express from "express";
import { Response, Request } from "express";
import { addTwoNumbers } from "../services/addNum.service";

export const addNumRouter = express.Router();

// Make Endpoints Here
addNumRouter.post("/add/", (req: Request, res: Response) => {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	const num1: string = req.body.num1;
	const num2: string = req.body.num2;
	const result = num1 + num2;
	res.json(JSON.stringify({ result: 3 }));
});