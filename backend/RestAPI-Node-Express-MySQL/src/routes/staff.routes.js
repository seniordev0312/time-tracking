//* Import express and initialize the routers
import express from "express";
const router = express.Router();

//* Call the controller with the methods
import {
  getStaffs,
  matchPin,
  checkTimeTrack,
  // createTimeTrack,
} from "../controllers/staffController";

//* Here I defined the methods
router.get("/", getStaffs);
router.post("/pin/:id", matchPin);
router.get("/timeTrack/:id", checkTimeTrack);

export default router;
