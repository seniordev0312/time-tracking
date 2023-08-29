//* Import the customers.routes file with all de methods
import staffRoutes from "./routes/staff.routes";

//* Here I defined the first endpoint
const router = (app) => {
  app.use("/staff", staffRoutes);
};

export default router;
