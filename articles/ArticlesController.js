const express = require("express");
const router = express.Router();

router.get("/article", (req, res) => {
    res.send("ROTA DE CARTIGOS");
});

router.get("/admin/article/new", (req, res) => {
    res.send("Rota para criar nova artigo!");
});

module.exports = router;