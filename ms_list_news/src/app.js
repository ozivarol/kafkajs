const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const helmet = require("helmet");
const cors = require("cors");
const { listNewsRouters } = require("./routers");

config();
loaders();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    methods: "*",
    origin: "*",
  })
);

app.use(helmet());

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ${process.env.PORT}`);
  app.use("/listnews", listNewsRouters, function (req, res, next) {
    console.log(req);
  });
});
