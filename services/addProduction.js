//添加表格数据
const addProduction = async function (surface,pro = {}) {
  // if (pro[machine]) {
    await surface.create(pro);
  // }
};

module.exports = addProduction;
