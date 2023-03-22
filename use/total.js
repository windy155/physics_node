const { queryAll } = require("../services/query");

let i = 1;
let total = 0;
let produced = 0,
  produce = 0,
  good = 0,
  perc;

//数据总计
module.exports = async function () {
  do {
    const res = await queryAll(10, i);
    arr = res.total;
    res.all.forEach(function (ele, index) {
      good += ele.good;
      produced += ele.produced;
      produce += ele.produce;
    });
    i++;
    perc = ((good * 100) / produced).toFixed(2) + "%";
    // console.log(good,produced, produce, perc);
  } while (total == 10);

  return {
    produced,
    produce,
    perc,
  };
};
