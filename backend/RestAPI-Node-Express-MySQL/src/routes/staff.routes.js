//* Import express and initialize the routers
import express from "express";
const router = express.Router();

//* Call the controller with the methods
import {
  getStaffs,
  matchPin,
  checkTimeTrack,
  createTimeTrack,
} from "../controllers/staffController";

//* Here I defined the methods
router.get("/", getStaffs); //localhost:5000/customers/
router.post("/pin/:id", matchPin);
router.get("/timeTrack/:id", checkTimeTrack);
// router.post("/timeTrack/create", createTimeTrack);
// router.get('/id/:id', getCustomersById); //localhost:5000/customers/id/1
// router.post('/add', createNewCustomer); //localhost:5000/customers/add
// router.put('/edit/:id', updateCustomer); //localhost:5000/customers/edit/1
// router.delete('/delete/:id', deleteOneCustomer); //localhost:5000/customers/delete/1
// router.delete('/deleteCustomers', deleteAllCustomers); //localhost:5000/customers/deleteCustomers

export default router;
