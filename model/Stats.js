import mongoose from "mongoose";

const { Schema } = mongoose;
const { model } = mongoose;

const StatsSchema = Schema({
    cantidadPositivos: {
        type: Number,
        required: true
    },
    cantidadNegativos: {
        type: Number,
        required: true
    }
})

export default model('Stats', StatsSchema);