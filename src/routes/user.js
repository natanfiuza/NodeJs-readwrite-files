const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.get("/", (req, res) => {
  const data = UserController.getAll();

  let resjson = {};
  let resData = [];
  let perPage = 15;
  let maxPage = 0;
  let page = 1;
  let previousPage = null;
  let nextPage = 0;
  if (req.query.perPage) {
    perPage = req.query.perPage;
  }
  if (req.query.page) {
    page = parseInt(req.query.page);
  }
  maxPage = Math.ceil(data.length / perPage);
  let idxIni = 0;
  let idxEnd = perPage;

  if (page > 1) {
    if (page > maxPage) {
      page = maxPage;
    }
    idxIni = (page - 1) * perPage;
    idxEnd = page * perPage;
  }
  previousPage = page - 1;
  if (previousPage == 0) {
    previousPage = null;
  }
  nextPage = page + 1;
  if (nextPage * perPage >= data.length) {
    nextPage = null;
  }
  if (nextPage > maxPage) {
    nextPage = maxPage;
  }

  resData = data.slice(idxIni, idxEnd);

  resjson.data = resData;
  resjson.previousPage =
    previousPage == null ? null : `page=${previousPage}&perPage=${perPage}`;
  resjson.nextPage =
    nextPage == null ? null : `page=${nextPage}&perPage=${perPage}`;
  resjson.page = page;
  res.status(200).json(resjson);
});

router.get("/:id", (req, res) => {
  const data = UserController.getOne(parseInt(req.params.id));

  if (Object.keys(data).length === 0 && data.constructor === Object) {
    res.status(404).json(data);
  } else {
    res.status(200).json(data);
  }
});

router.post("/", (req, res) => {
  if (Object.keys(req.body).length > 0) {
    if (req.body.name) {
      const data = UserController.create(req.body);
      res.status(201).json(data);
    } else {
      res.status(400).json();
    }
  }
  res.status(404).json();
});

router.patch("/:id", (req, res) => {
  let user = UserController.getOne(parseInt(req.params.id));

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    res.status(404).json({});
  } else {
    let data = UserController.getAll();
    data.forEach((e, i) => {
      if (e.id === parseInt(req.params.id)) {
        if (req.body.name && req.body.name != "") {
          e.name = req.body.name;
        }

        if (req.body.email && req.body.email != "") {
          e.email = req.body.email;
        }

        if (req.body.phone && req.body.phone != "") {
          e.phone = req.body.phone;
        }

        data[i] = e;

        UserController.setAll(data);
      }
    });

    user = UserController.getOne(parseInt(req.params.id));

    res.status(200).json(user);
  }
});

router.delete("/:id", (req, res) => {
  let user = UserController.getOne(parseInt(req.params.id));

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    res.status(404).json(user);
  } else {
    let data = UserController.getAll();
    let idx = -1;
    data.forEach((e, i) => {
      if (e.id === parseInt(req.params.id)) {
        idx = i;
      }
    });
    data.splice(idx, 1);
    UserController.setAll(data);
    res.status(204).json();
  }
});

module.exports = router;
