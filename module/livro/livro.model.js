const mongoose = require('mongoose');
const { Schema } = mongoose;

const livroSchema = new Schema(
    {
        id: Number,
        titulo: String,
        num_paginas: Number,
        isbn: String,
        editora: String,
    },
    {
        timestamps: true,
    }
);

const LivroModel = mongoose.model('livros', livroSchema);

module.exports = LivroModel;