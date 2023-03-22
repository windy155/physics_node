const surfaces = require("../use/read");
const { Op } = require("sequelize");

//查询副表数据
const queryDetail = async function (id, size, nowpage) {
  const count = await surfaces[id].count({
    where: {
      machine: id,
    },
  });
  const result = await surfaces[id].findAll({
    where: {
      machine: id,
    },
    offset: (nowpage - 1) * size,
    limit: size,
  });
  return { result, count };
};

// queryDetail(1,4,2).then(res=>console.log(res));

//查询总表数据
const queryAll = async function (size, nowpage) {
  let total = 0;
  let len = surfaces.length;
  for (let i = 0; i < len; i++) {
    if (surfaces[i] != undefined) {
      total++;
    }
  }
  let all = [];
  for (let i = (nowpage - 1) * size; i < nowpage * size; i++) {
    if (surfaces[i]) {
      const produced = await surfaces[i].count({
        where: {
          machine: i,
        },
      });
      const ok = await surfaces[i].count({
        where: {
          machine: i,
          problem: "OK",
        },
      });
      all.push({
        id: i,
        number: 100001, //再设
        num: 100000, //再设
        good: ok,
        produced: produced,
        produce: 100000 - produced,
        perc: ((ok * 100) / produced).toFixed(2) + "%",
      });
    }
  }
  return { all, total };
};

// queryAll(2,1).then(res=>console.log(res));

const queryBadPicture = async function (machine, id) {
  const address = await surfaces[machine].findAll({
    attributes: ["img", "machine"],
    where: {
      machine,
      id,
    },
  });
  return address;
};

const queryGoodMount = async function (machine) {
  const ok = await surfaces[machine].count({
    where: {
      machine,
      problem: "OK",
      img: { [Op.like]: "%.jpg" },
    },
  });

  const address = await surfaces[machine].findAll({
    attributes: ["machine", "id"],
    where: {
      machine,
      problem: "OK",
      img: { [Op.like]: "%.jpg" },
    },
  });
  return { count: ok, address };
};

const queryGoodPicture = async function (machine, id) {
  const address = await surfaces[machine].findAll({
    attributes: ["img", "machine"],
    where: {
      machine,
      id,
    },
  });
  return address;
};

const queryIdMount = async function (machine) {
  if (surfaces[machine]) {
    const added = await surfaces[machine].count({
      where: {
        machine,
      },
    });
    return added;
  }
  return 0;
};

module.exports = {
  queryDetail,
  queryAll,
  queryBadPicture,
  queryGoodMount,
  queryGoodPicture,
  queryIdMount,
};
