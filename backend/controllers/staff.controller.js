const StaffService = require("../services/staff.service");

exports.getAllStaff = async (req, res, next) => {
  try {
    const staffData = await StaffService.getStaffs();
    console.log("staff data", staffData);
    res.json({ data: staffData });
  } catch (error) {
    return res.status(400).json({ message: "Bad Request" });
  }
};
