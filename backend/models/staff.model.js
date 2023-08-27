const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Staff = sequelize.define("cm_ho_staff", {
  SID: {
    type: DataTypes.INTEGER,
  },
  ID_EXTERNAL: {
    type: DataTypes.INTEGER,
  },
  STATUS: {
    type: DataTypes.STRING,
  },
  SOTRE_HOME: {
    type: DataTypes.INTEGER,
  },
  STORE_SHOW_IN: {
    type: DataTypes.TEXT,
  },
  COMPANY: {
    type: DataTypes.STRING,
  },
  SEX: {
    type: DataTypes.STRING,
  },
  PERS_NR: {
    type: DataTypes.STRING,
  },
  NAME_FIRST: {
    type: DataTypes.STRING,
  },
  NAME_LAST: {
    type: DataTypes.STRING,
  },
  BIRTHDATE: {
    type: DataTypes.DATE,
  },
  STREET: {
    type: DataTypes.STRING,
  },
  DISTRICT: {
    type: DataTypes.STRING,
  },
  ZIP: {
    type: DataTypes.STRING,
  },
  CITY: {
    type: DataTypes.STRING,
  },
  FON: {
    type: DataTypes.STRING,
  },
  INSIGNIA: {
    type: DataTypes.STRING,
  },
  IMAGE_PROPERTIES: {
    type: DataTypes.STRING,
  },
  JOINED: {
    type: DataTypes.DATE,
  },
  LEFT: {
    type: DataTypes.DATE,
  },
  DURATION_CUT: {
    type: DataTypes.STRING,
  },
  DURATION_COLOR: {
    type: DataTypes.STRING,
  },
  DURATION_COLOR_TOUCH_UP: {
    type: DataTypes.STRING,
  },
  DURATION_STREAK_CREATIVE: {
    type: DataTypes.STRING,
  },
  DURATION_STREAK_UPPER: {
    type: DataTypes.STRING,
  },
  DURATION_STREAK_FULL: {
    type: DataTypes.STRING,
  },
  DURATION_BALAYAGE: {
    type: DataTypes.STRING,
  },
  DURATION_WASH_AND_DRY: {
    type: DataTypes.STRING,
  },
  DURATION_CUT_WASH_DRY: {
    type: DataTypes.STRING,
  },
  DURATION_BEARD: {
    type: DataTypes.STRING,
  },
  DURATION_WASH_CUT_BEARD: {
    type: DataTypes.STRING,
  },
  DURATION_OTHER: {
    type: DataTypes.STRING,
  },
  PERSONAL_PASSWORD: {
    type: DataTypes.STRING,
  },
  PERSONAL_PIN: {
    type: DataTypes.INTEGER,
  },
  CREATED: {
    type: DataTypes.DATE,
  },
  CREATED_BY: {
    type: DataTypes.INTEGER,
  },
  CHANGED: {
    type: DataTypes.DATE,
  },
  CHANGED_BY: {
    type: DataTypes.INTEGER,
  },
});
module.exports = Staff;
