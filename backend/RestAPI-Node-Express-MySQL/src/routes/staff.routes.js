//* Import express and initialize the routers
import express from "express";
const router = express.Router();

//* Call the controller with the methods
import {
  getStaffs,
  matchPin,
  checkTimeTrack,
  startTimeTrack,
} from "../controllers/staffController";

//* Here I defined the methods
router.get("/", getStaffs);
router.post("/pin/:id", matchPin);
router.get("/timeTrack/:id", checkTimeTrack);
router.post("/timeTrack/start", startTimeTrack);

export default router;
