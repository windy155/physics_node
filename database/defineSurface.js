const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const defineSurface = function (machine) {
  const addProduction = sequelize.define(
    "machine" + machine,
    {
      // id: {
      //   //主键
      //   type: DataTypes.NUMBER,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      num: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      width: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scale: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shift: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      problem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      //外键
      machine: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { createdAt: false, updatedAt: false }
  );
  return addProduction;
};


// const surface = defineSurface(2);

// (async function (){
//     await surface.sync({ alter: true });
//     console.log("同步完成");
//   })()
// console.log(surface);

module.exports = defineSurface;
