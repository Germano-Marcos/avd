const router = require("express").Router()


// Provas router
const provasRouter = require("./prova")
router.use("/", provasRouter)


// Provas2 router
const provas2Router = require("./prova2")
router.use("/", provas2Router)


// Provas3 router
const provas3Router = require("./prova3")
router.use("/", provas3Router)


module.exports = router