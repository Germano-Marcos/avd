const mongoose = require("mongoose");

const { Schema } = mongoose;

const prova3Schema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        turma: {
            type: String,
            required: true,
        },
        serie: {
            type: String,
            required: true,
        },
        notaPortugues: {
            type: Number,
            required: true,
        },
        notaMatematica: {
            type: Number,
            required: true,
        },
        entrega: {
            type: Date,
            required: true,
        },

        // Disciplina da Questão 1
        discQ1: String,
        // Questão 1
        q1: {
            type: String,
            required: true,
        },
        // Gabarito da Questão 1
        gq1: String,
        // Descritor da Questão 1
        dq1: String,


        discQ2: String,
        q2: {
            type: String,
            required: true,
        },
        gq2: String,
        dq2: String,

        discQ3: String,
        q3: {
            type: String,
            required: true,
        },
        gq3: String,
        dq3: String,

        discQ4: String,
        q4: {
            type: String,
            required: true,
        },
        gq4: String,
        dq4: String,

        discQ5: String,
        q5: {
            type: String,
            required: true,
        },
        gq5: String,
        dq5: String,

        discQ6: String,
        q6: {
            type: String,
            required: true,
        },
        gq6: String,
        dq6: String,

        discQ7: String,
        q7: {
            type: String,
            required: true,
        },
        gq7: String,
        dq7: String,

        discQ8: String,
        q8: {
            type: String,
            required: true,
        },
        gq8: String,
        dq8: String,

        discQ9: String,
        q9: {
            type: String,
            required: true,
        },
        gq9: String,
        dq9: String,

        discQ10: String,
        q10: {
            type: String,
            required: true,
        },
        gq10: String,
        dq10: String,

        discQ11: String,
        q11: {
            type: String,
            required: true,
        },
        gq11: String,
        dq11: String,

        discQ12: String,
        q12: {
            type: String,
            required: true,
        },
        gq12: String,
        dq12: String,

        discQ13: String,
        q13: {
            type: String,
            required: true,
        },
        gq13: String,
        dq13: String,

        discQ14: String,
        q14: {
            type: String,
            required: true,
        },
        gq14: String,
        dq14: String,

        discQ15: String,
        q15: {
            type: String,
            required: true,
        },
        gq15: String,
        dq15: String,

        discQ16: String,
        q16: {
            type: String,
            required: true,
        },
        gq16: String,
        dq16: String,

        discQ17: String,
        q17: {
            type: String,
            required: true,
        },
        gq17: String,
        dq17: String,

        discQ18: String,
        q18: {
            type: String,
            required: true,
        },
        gq18: String,
        dq18: String,

        discQ19: String,
        q19: {
            type: String,
            required: true,
        },
        gq19: String,
        dq19: String,

        discQ20: String,
        q20: {
            type: String,
            required: true,
        },
        gq20: String,
        dq20: String,

        discQ21: String,
        q21: {
            type: String,
            required: true,
        },
        gq21: String,
        dq21: String,

        discQ22: String,
        q22: {
            type: String,
            required: true,
        },
        gq22: String,
        dq22: String,

        discQ23: String,
        q23: {
            type: String,
            required: true,
        },
        gq23: String,
        dq23: String,

        discQ24: String,
        q24: {
            type: String,
            required: true,
        },
        gq24: String,
        dq24: String,

        discQ25: String,
        q25: {
            type: String,
            required: true,
        },
        gq25: String,
        dq25: String,

        discQ26: String,
        q26: {
            type: String,
            required: true,
        },
        gq26: String,
        dq26: String,

        discQ27: String,
        q27: {
            type: String,
            required: true,
        },
        gq27: String,
        dq27: String,

        discQ28: String,
        q28: {
            type: String,
            required: true,
        },
        gq28: String,
        dq28: String,

        discQ29: String,
        q29: {
            type: String,
            required: true,
        },
        gq29: String,
        dq29: String,

        discQ30: String,
        q30: {
            type: String,
            required: true,
        },
        gq30: String,
        dq30: String,

        discQ31: String,
        q31: {
            type: String,
            required: true,
        },
        gq31: String,
        dq31: String,

        discQ32: String,
        q32: {
            type: String,
            required: true,
        },
        gq32: String,
        dq32: String,

        discQ33: String,
        q33: {
            type: String,
            required: true,
        },
        gq33: String,
        dq33: String,

        discQ34: String,
        q34: {
            type: String,
            required: true,
        },
        gq34: String,
        dq34: String,

        discQ35: String,
        q35: {
            type: String,
            required: true,
        },
        gq35: String,
        dq35: String,

        discQ36: String,
        q36: {
            type: String,
            required: true,
        },
        gq36: String,
        dq36: String,

        discQ37: String,
        q37: {
            type: String,
            required: true,
        },
        gq37: String,
        dq37: String,

        discQ38: String,
        q38: {
            type: String,
            required: true,
        },
        gq38: String,
        dq38: String,

        discQ39: String,
        q39: {
            type: String,
            required: true,
        },
        gq39: String,
        dq39: String,

        discQ40: String,
        q40: {
            type: String,
            required: true,
        },
        gq40: String,
        dq40: String,
    },
    { timestamps: true }
);

const Prova3 = mongoose.model("Prova3", prova3Schema);

module.exports = {
    Prova3,
    //   serviceSchema,
};