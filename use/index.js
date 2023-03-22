const { queryPicture } = require("../services/query");
const readPicture = require("./readPicture");
const fs = require("fs");

fs.readFile("C:/Users/15523/Desktop/测试/9be59de7ddfd6126f40195629ed6275d.jpg", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const buffer = Buffer.from(data);
      //   console.log(buffer.toString("base64"));
      const src =
        "data: image/" + "jpg" + ";base64," + buffer.toString("base64");
    }
  });