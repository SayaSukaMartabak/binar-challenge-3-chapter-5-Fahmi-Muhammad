/*--------------------------------------------------------------------------------------------------------------------- */

const express = require("express");
const router = express.Router();
let dataUser = require("../views/dataUser.json");

//routers main interface
router.get("/home", (req, res) => {
  res.render("gameInterface");
});

router.get("/home/gameplay", (req, res) => {
  res.render("gamePlay");
});

//router login page
router.get("/home/login", (req, res) => {
  res.render("loginPage");
});

/*--------------------------------------------------------------------------------------------------------------------- */

//login json
router.get("/home/login/data", (req, res) => {
  res.status(200).json(dataUser);
});

//get id
router.get("/home/login/data/:id", (req, res) => {
  let post = dataUser.find((i) => i.id === +req.params.id);
  res.status(200).json(post);
});

//get and post
router.post("/home/login/data/add", (req, res) => {
  //destruct req.password
  let { email, password } = req.body;

  const id = dataUser[dataUser.length - 1].id + 1;
  let post = {
    id,
    email,
    password,
  };

  dataUser.push(post);
  res.status(201).json(post);

});

//put
router.put("/home/login/data/update/:id", (req, res) => {
  let post = dataUser.find((i) => i.id === +req.params.id);
  const params = { email: req.body.email, password: req.body.password };
  post = { ...post, ...params };

  post = dataUser.map((i) => (i.id === post.id ? post : i));
  res.status(200).json(post);
});

//delete
router.delete("/home/login/data/delete/:id", (req, res) => {
  let { id } = req.params;
  dataUser = dataUser.filter((e) => e.id != id);
  res.status(200).json({ msg: "data berhasil dihapus", id: id });
});

module.exports = router;

/*--------------------------------------------------------------------------------------------------------------------- */
