import axios from "axios";

const API_URL = `http://3.90.166.108:8001`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// get all staff data from backend
export const getAllStaffs = async () => {
  const response = await axios.get(`${API_URL}/staff`, config);
  return response.data;
};

// check the pin code and start the time track
export const checkPinCode = async (data, id) => {
  const response = await axios.post(`${API_URL}/staff/pin/${id}`, data, config);
  return response.data;
};

// check the the time track is running.
export const checkTimeTrack = async (id) => {
  const response = await axios.get(`${API_URL}/staff/timeTrack/${id}`, config);
  return response.data;
};

// create the time track of today.
export const startTimeTrack = async (data) => {
  const response = await axios.post(
    `${API_URL}/staff/timeTrack/start`,
    data,
    config
  );
  return response.data;
};
