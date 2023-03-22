const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");

var sequelize = new Sequelize("test", "root", "17336500275x", {
  host: "localhost",
  dialect: "mysql",
  // logging: null
});

module.exports = sequelize;
//
sequelize
  .authenticate()
  .then(() => {
    console.log("链接成功");
  })
  .catch(() => {
    console.log("链接失败");
  });


sequelize.sync({ alter: true });


// const Add = sequelize.define(
//   "Add",
//   {
//     Lid: {
//       //主键
//       type: DataTypes.STRING,
//       allowNull: false,
//       // primaryKey: true,
//     },
//     // Sid: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     // }
//   },
//   { createdAt: false, updatedAt: false }
// );

// console.log(Add);
// (async function (){
//   console.log(Add);
//   await Add.sync({ alter: true });
//   // await Add.create({Lid:11});
//   console.log("同步完成");
//   // const res = await Add.findAll({
//   //   // where: {
//   //   //   Lid: 1,
//   //   // },
//   //   offset: 4,
//   //   limit: 5,
//   // });
//   // console.log(JSON.stringify(res));
// })()
