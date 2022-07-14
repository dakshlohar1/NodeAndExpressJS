import * as express from "express";
import { Response, Request } from "express";
import { addTwoNumbers } from "../services/addNum.service";

export const addNumRouter = express.Router();

// Make Endpoints Here
addNumRouter.post("/add/", (req: Request, res: Response) => {
  const num1: number = req.body.num1;
  const num2: number = req.body.num2;
  const result = addTwoNumbers(num1, num2);
  res.json({ result: result });
});
