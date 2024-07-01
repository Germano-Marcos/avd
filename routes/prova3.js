const router = require("express").Router()

const prova3Controller = require("../controllers/prova3Controller")

router.route("/provas3").post((req, res) => prova3Controller.create(req, res))

router.route("/provas3").get((req, res) => prova3Controller.getAll(req, res))

router.route("/provas3/:id").get((req, res) => prova3Controller.get(req, res))

router.route("/provas3/:id").delete((req, res) => prova3Controller.delete(req, res))

module.exports = router