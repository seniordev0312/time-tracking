import dbConnection from "../database/dbConnection";

export const getStaffs = (req, res) => {
  const sqlQuery = "SELECT * FROM cm_ho_staff";
  // let total_result = [];
  // let staff_result = [];

  dbConnection.query(sqlQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results);
  });
  // for (let i = 0; i < staff_result.length; i++) {
  //   const sqlQuery = `SELECT * FROM cm_ho_working_plans WHERE STAFF_ID=${staff_result[i].SID}`;
  //   staff_result[i]["status_check"] = getCheckStatus(sqlQuery);

  //   total_result.push(staff_result[i]);
  // }
  // res.status(200).json(staff_result);
};

export const matchPin = (req, res) => {
  console.log("data ----->", req.body.pin, req.params.id);
  const sqlQuery = `SELECT * FROM cm_ho_staff WHERE SID=${req.params.id}`;

  dbConnection.query(sqlQuery, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results[0].PERSONAL_PIN);
    if (String(results[0].PERSONAL_PIN) === req.body.pin) {
      res.status(200).json("succsss");
    } else {
      res.status(400).json("Pin does not match");
    }
  });
};

export const checkTimeTrack = (req, res) => {
  const sqlQuery = `SELECT * FROM cm_ho_working_plans WHERE STAFF_ID=${req.params.id}`;
  dbConnection.query(sqlQuery, (error, results) => {
    if (error) {
      throw error;
    }
    let status = true;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    for (let i = 0; i < results.length; i++) {
      if (
        String(results[i].WORK_DATE).split("T")[0] ===
        year + "-" + month + "-" + day
      ) {
        status = false;
        break;
      } else {
        status = true;
        console.log(true);
        break;
      }
    }
    if (hour + minute * 0.01 < 7.45) {
      status = false;
    } else {
      status = true;
    }
    return res.status(200).json(status);
  });
};

export const createTimeTrack = (req, res) => {
  const id = req.body.id;
};

// export const getCustomersById = (req, res) => {

//     const id = parseInt(req.params.id);
//     let sqlQuery = `SELECT * FROM customers WHERE id = ${id}`;

//     // This method verifies that the id passed by parameter is a number, if it is not, it sends an error message
//     if (isNaN(id)) {
//         return res.json('You must enter a valid id as a parameter');
//     }

//     dbConnection.query(sqlQuery, (error, result) => {
//         if (error) throw error;
//         res.status(200).json(result[0]);
//     });
// };

// export const createNewCustomer = (req, res) => {

//     // Declare that I store the request body in a constant
//     const customer = req.body;
//     // So, I create the object with the table fields by calling the constant customer
//     const customerObj = [
//         customer.first_name,
//         customer.last_name,
//         customer.email,
//         customer.age
//     ];

//     // This method verifies that the request body has all the complete fields, otherwise the operation will not be executed and sends an error message
//     if (!customer.first_name || !customer.last_name || !customer.email || !customer.age) {
//         return res.json({
//             ErrorCode: 204,
//             Message: 'Fields cannot be empty'
//         });
//     }

//     let sqlQuery = 'INSERT INTO customers (first_name, last_name, email, age) VALUES ( ?,?,?,? )';

//     dbConnection.query(sqlQuery, customerObj, (err, result) => {
//         if (err) throw err;
//         res.status(201).json('Customer created with id: ' + result.insertId);
//     });
// };

// export const updateCustomer = (req, res) => {

//     const id = parseInt(req.params.id);
//     const customer = req.body;
//     const customerObj = [
//         customer.first_name,
//         customer.last_name,
//         customer.email,
//         customer.age
//     ];

//     if (isNaN(id)) {
//         return res.json('You must enter a valid id as a parameter');
//     }

//     if (!customer.first_name || !customer.last_name || !customer.email || !customer.age) {
//         return res.json({
//             ErrorCode: 204,
//             Message: 'Fields cannot be empty'
//         });
//     }

//     let sqlQuery = `UPDATE customers SET first_name = ?, last_name = ?, email = ?, age = ? WHERE id = ${id}`

//     dbConnection.query(sqlQuery, customerObj,  (error, result) => {
//         if (error) throw error;
//         if (result.affectedRow === 0) {
//             res.send('No customer was updated');
//         }
//         res.json(`Customer with id ${id} updated successfully`);
//     });
// };

// export const deleteOneCustomer = (req, res) => {

//     const id = parseInt(req.params.id);

//     if (isNaN(id)) {
//         return res.json('You must enter a valid id as a parameter');
//     }

//     let sqlQuery = `DELETE FROM customers WHERE id = ${id}`;

//     dbConnection.query(sqlQuery, error => {
//         if (error) throw error;
//         res.status(200).json(`Customer with id ${id} deleted successfully`);
//     });
// };

// export const deleteAllCustomers = (req, res) => {

//     let sqlQuery = 'TRUNCATE TABLE customers';

//     dbConnection.query(sqlQuery, error => {
//         if (error) throw error;
//         res.status(200).json('All records have been erased');
//     });
// };
