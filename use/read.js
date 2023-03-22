const defineSurface = require("../database/defineSurface");
const xlsx = require("node-xlsx");
const fs = require("fs");

let surfaces = [];

//读取文件内容后创建表

for (let n = 1; n < 20; n++) {
  try {
    var obj = xlsx.parse("C:/Users/15523/Desktop/测试" + `/测试${n}.xlsx`); //文件名
    let data = obj[0].data;
    let machine = data[1][12];
    surfaces[machine] = defineSurface(machine);
  } catch {}
}
console.log(surfaces.length);
module.exports = surfaces;
