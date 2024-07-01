const router = require("express").Router()

const provaController = require("../controllers/provaController")

router.route("/provas").post((req, res) => provaController.create(req, res))

router.route("/provas").get((req, res) => provaController.getAll(req, res))

router.route("/provas/:id").get((req, res) => provaController.get(req, res))

router.route("/provas/:id").delete((req, res) => provaController.delete(req, res))

module.exports = router