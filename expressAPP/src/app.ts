import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { addNumRouter } from "./controllers/addNum.controller";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let corsOptions = {
  origin: ["*"], // * for all origin
};

app.use(cors());

// Register API Endpoints of controllers here
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/", addNumRouter);

// export our app
export default app;
