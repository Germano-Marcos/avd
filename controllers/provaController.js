const { Prova: ProvaModel } = require("../models/Prova");

const provaController = {
    create: async (req, res) => {
        try {
            const prova = {
                nome: req.body.nome,
                turma: req.body.turma,
                serie: req.body.serie,
                notaPortugues: req.body.notaPortugues,
                notaMatematica: req.body.notaMatematica,
                entrega: req.body.entrega,

                discQ1: req.body.discQ1,
                q1: req.body.q1,
                gq1: req.body.gq1,
                dq1: req.body.dq1,

                discQ2: req.body.discQ2,
                q2: req.body.q2,
                gq2: req.body.gq2,
                dq2: req.body.dq2,

                discQ3: req.body.discQ3,
                q3: req.body.q3,
                gq3: req.body.gq3,
                dq3: req.body.dq3,

                discQ4: req.body.discQ4,
                q4: req.body.q4,
                gq4: req.body.gq4,
                dq4: req.body.dq4,

                discQ5: req.body.discQ5,
                q5: req.body.q5,
                gq5: req.body.gq5,
                dq5: req.body.dq5,

                discQ6: req.body.discQ6,
                q6: req.body.q6,
                gq6: req.body.gq6,
                dq6: req.body.dq6,

                discQ7: req.body.discQ7,
                q7: req.body.q7,
                gq7: req.body.gq7,
                dq7: req.body.dq7,

                discQ8: req.body.discQ8,
                q8: req.body.q8,
                gq8: req.body.gq8,
                dq8: req.body.dq8,

                discQ9: req.body.discQ9,
                q9: req.body.q9,
                gq9: req.body.gq9,
                dq9: req.body.dq9,

                discQ10: req.body.discQ10,
                q10: req.body.q10,
                gq10: req.body.gq10,
                dq10: req.body.dq10,

                discQ11: req.body.discQ11,
                q11: req.body.q11,
                gq11: req.body.gq11,
                dq11: req.body.dq11,

                discQ12: req.body.discQ12,
                q12: req.body.q12,
                gq12: req.body.gq12,
                dq12: req.body.dq12,

                discQ13: req.body.discQ13,
                q13: req.body.q13,
                gq13: req.body.gq13,
                dq13: req.body.dq13,

                discQ14: req.body.discQ14,
                q14: req.body.q14,
                gq14: req.body.gq14,
                dq14: req.body.dq14,

                discQ15: req.body.discQ15,
                q15: req.body.q15,
                gq15: req.body.gq15,
                dq15: req.body.dq15,

                discQ16: req.body.discQ16,
                q16: req.body.q16,
                gq16: req.body.gq16,
                dq16: req.body.dq16,

                discQ17: req.body.discQ17,
                q17: req.body.q17,
                gq17: req.body.gq17,
                dq17: req.body.dq17,

                discQ18: req.body.discQ18,
                q18: req.body.q18,
                gq18: req.body.gq18,
                dq18: req.body.dq18,

                discQ19: req.body.discQ19,
                q19: req.body.q19,
                gq19: req.body.gq19,
                dq19: req.body.dq19,

                discQ20: req.body.discQ20,
                q20: req.body.q20,
                gq20: req.body.gq20,
                dq20: req.body.dq20,

                discQ21: req.body.discQ21,
                q21: req.body.q21,
                gq21: req.body.gq21,
                dq21: req.body.dq21,

                discQ22: req.body.discQ22,
                q22: req.body.q22,
                gq22: req.body.gq22,
                dq22: req.body.dq22,

                discQ23: req.body.discQ23,
                q23: req.body.q23,
                gq23: req.body.gq23,
                dq23: req.body.dq23,

                discQ24: req.body.discQ24,
                q24: req.body.q24,
                gq24: req.body.gq24,
                dq24: req.body.dq24,

                discQ25: req.body.discQ25,
                q25: req.body.q25,
                gq25: req.body.gq25,
                dq25: req.body.dq25,

                discQ26: req.body.discQ26,
                q26: req.body.q26,
                gq26: req.body.gq26,
                dq26: req.body.dq26,

                discQ27: req.body.discQ27,
                q27: req.body.q27,
                gq27: req.body.gq27,
                dq27: req.body.dq27,

                discQ28: req.body.discQ28,
                q28: req.body.q28,
                gq28: req.body.gq28,
                dq28: req.body.dq28,

                discQ29: req.body.discQ29,
                q29: req.body.q29,
                gq29: req.body.gq29,
                dq29: req.body.dq29,

                discQ30: req.body.discQ30,
                q30: req.body.q30,
                gq30: req.body.gq30,
                dq30: req.body.dq30,

                discQ31: req.body.discQ31,
                q31: req.body.q31,
                gq31: req.body.gq31,
                dq31: req.body.dq31,

                discQ32: req.body.discQ32,
                q32: req.body.q32,
                gq32: req.body.gq32,
                dq32: req.body.dq32,

                discQ33: req.body.discQ33,
                q33: req.body.q33,
                gq33: req.body.gq33,
                dq33: req.body.dq33,

                discQ34: req.body.discQ34,
                q34: req.body.q34,
                gq34: req.body.gq34,
                dq34: req.body.dq34,

                discQ35: req.body.discQ35,
                q35: req.body.q35,
                gq35: req.body.gq35,
                dq35: req.body.dq35,

                discQ36: req.body.discQ36,
                q36: req.body.q36,
                gq36: req.body.gq36,
                dq36: req.body.dq36,

                discQ37: req.body.discQ37,
                q37: req.body.q37,
                gq37: req.body.gq37,
                dq37: req.body.dq37,

                discQ38: req.body.discQ38,
                q38: req.body.q38,
                gq38: req.body.gq38,
                dq38: req.body.dq38,

                discQ39: req.body.discQ39,
                q39: req.body.q39,
                gq39: req.body.gq39,
                dq39: req.body.dq39,

                discQ40: req.body.discQ40,
                q40: req.body.q40,
                gq40: req.body.gq40,
                dq40: req.body.dq40,

            };

            const response = await ProvaModel.create(prova);

            res.status(201).json({ response, msg: "Prova criada com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },

    // Buscar TODAS as provas
    getAll: async (req, res) => {
        try {
            const provas = await ProvaModel.find();

            res.json(provas);
        } catch (error) {
            console.log(error);
        }
    },


    get: async (req, res) => {
        try {
          const id = req.params.id;
          const prova = await ProvaModel.findById(id);
    
          if (!prova) {
            res.status(404).json({ msg: "Prova não encontrada" });
            return;
          }
    
          res.json(prova);
        } catch (error) {
          console.log(error);
        }
      },


      delete: async (req, res) => {
        try {
          const id = req.params.id;
    
          const prova = await ProvaModel.findById(id);
    
          if (!prova) {
            res.status(404).json({ msg: "Prova não encontrada" });
            return;
          }
    
          const deletedProva = await ProvaModel.findByIdAndDelete(id);
    
          res
            .status(200)
            .json({ deletedProva, msg: "Prova excluída com sucesso!" });
        } catch (error) {
          console.log(error);
        }
      },
    //   update: async (req, res) => {
    //     try {
    //       const id = req.params.id;
    
    //       const prova = {
    //         name: req.body.name,
    //         description: req.body.description,
    //         price: req.body.price,
    //         image: req.body.image,
    //       };
    
    //       const updatedProva = await ProvaModel.findByIdAndUpdate(id, prova);
    
    //       if (!updatedProva) {
    //         res.status(404).json({ msg: "Prova não encontrada" });
    //         return;
    //       }
    
    //       res.status(200).json({ prova, msg: "Prova atualizada com sucesso" });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },

}

module.exports = provaController