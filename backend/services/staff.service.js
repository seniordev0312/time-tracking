const StaffModel = require("../models/staff.model");

exports.getStaffs = () => {
  // const data = StaffModel.findAll();
  // console.log(data);

  return StaffModel.findAll();
};
