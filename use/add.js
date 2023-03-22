const addProduction = require("../services/addProduction");
const surfaces = require("./read");
const xlsx = require("node-xlsx");
const fs = require("fs");
const { queryIdMount } = require("../services/query");

//读取文件后添加数据
//来个死循环，或者定时器
add();
add();
let timer = setInterval(add, 5 * 60 * 1000);

function add() {
  for (let n = 1; n < 20; n++) {
    try {
      let obj = xlsx.parse("C:/Users/15523/Desktop/测试" + `/测试${n}.xlsx`); //文件名
      // console.log(JSON.stringify(obj[0].data));
      let data = obj[0].data;
      let len = data.length;
      let machine = data[1][12];

      // 先查询数据库已存入了多少条数据
      queryIdMount(machine).then((mount) => {
        for (let i = mount + 1; i < len; i++) {
          let newObj = {};
          for (let j = 1; j < 13; j++) {
            newObj[data[0][j]] = data[i][j];
          }
          //添加数据
          //可以在这里强制同步在添加
          addProduction(surfaces[machine], newObj);
        }
      });
    } catch {}
  }
}
