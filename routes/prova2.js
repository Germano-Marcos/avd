const router = require("express").Router()

const prova2Controller = require("../controllers/prova2Controller")

router.route("/provas2").post((req, res) => prova2Controller.create(req, res))

router.route("/provas2").get((req, res) => prova2Controller.getAll(req, res))

router.route("/provas2/:id").get((req, res) => prova2Controller.get(req, res))

router.route("/provas2/:id").delete((req, res) => prova2Controller.delete(req, res))

module.exports = router