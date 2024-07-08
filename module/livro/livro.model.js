const mongoose = require('mongoose');
const { Schema } = mongoose;

const livroSchema = new Schema(
    {
        _id: String,
        titulo: String,
        paginas: Number,
        codigo: String,
        editora: String,
    },
    {
        timestamps: true,
    }
);

const LivroModel = mongoose.model('livros', livroSchema);

module.exports = LivroModel;