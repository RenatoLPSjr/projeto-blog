const express = require("express");
const router = express.Router();
const USer = require("./User");

router.get("/admin/users", (req, res) => {
    res.send("Listagem de Usuarios");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});


module.exports = router;

