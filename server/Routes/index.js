import express from "express"
const router = express.Router();
import {Controller} from "../Controllers/index.js"
// const Controller = require("../Controllers");

let {
  handleGETRequest,
  handlePOSTRequest,
  handlePUTRequest,
  handleDELETERequest,
} = Controller;
router.post("/GET-call", handleGETRequest);
router.post("/POST-call", handlePOSTRequest);
router.post("/PUT-call", handlePUTRequest);
router.post("/DELETE-call", handleDELETERequest);

export default router;
