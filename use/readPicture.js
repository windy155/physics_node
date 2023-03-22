const fs = require("fs");
const image = require("imageinfo");

module.exports = async function readPicture(path) {
  fs.readFile(path, async function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const buffer = Buffer.from(data);
      //   console.log(buffer.toString("base64"));
      const src =
        "data: image/" + "jpg" + ";base64," + buffer.toString("base64");
    }
  });
};
