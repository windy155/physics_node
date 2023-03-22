const express = require("express");
const total = require("../use/total");
const http = require('http');
const {
  queryAll,
  queryBadPicture,
  queryDetail,
  queryGoodMount,
  queryGoodPicture,
} = require("../services/query");
const app = express();
const fs = require("fs");
const server = http.createServer(app);

app.get("/total", (req, res) => {
  total().then(
    (data) => {
      res.jsonp(data);
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.get("/goodmount", (req, res) => {
  const re = req.query;
  queryGoodMount(+re.machine).then(
    (data) => {
      res.jsonp(data);
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.get("/goodimg", (req, res) => {
  const re = req.query;
  queryGoodPicture(+re.machine, +re.id).then(
    (address) => {
      const path = "C:/Users/15523/Desktop/测试/" + address[0].dataValues.img;

      //用来拼接地址
      // res.machine
      fs.readFile(path, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          const buffer = Buffer.from(data);
          const src =
            "data: image/" + "jpg" + ";base64," + buffer.toString("base64");
          res.jsonp(src);
        }
      });
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.get("/badimg", (req, res) => {
  const re = req.query;
  queryBadPicture(+re.machine, +re.id).then(
    (address) => {
      const path = "C:/Users/15523/Desktop/测试/" + address[0].dataValues.img;

      //用来拼接地址
      // res.machine
      fs.readFile(path, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          const buffer = Buffer.from(data);
          const src =
            "data: image/" + "jpg" + ";base64," + buffer.toString("base64");
          res.jsonp(src);
        }
      });
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.get("/all", (req, res) => {
  const re = req.query;
  let size = +re.size,
    nowPage = +re.nowPage;
  queryAll(size, nowPage).then(
    (data) => {
      res.jsonp(data);
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.get("/detail", (req, res) => {
  const re = req.query;
  let id = +re.id,
    size = +re.size,
    nowpage = +re.nowPage;
  queryDetail(id, size, nowpage).then(
    (data) => {
      res.jsonp(data);
    },
    (err) => {
      res.jsonp(err);
    }
  );
});

app.listen(8888, () => {
  console.log("监听中");
});
// server.listen(8888, '172.21.72.134');