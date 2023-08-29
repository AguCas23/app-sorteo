const express = require('express')
const cors = require('cors')

const {
    participantes,
    postParticipante,
    deleteParticipante
} = require('./handlers')

const app = express()
app.use(cors("*"))
app.use(express.json())
app.get('/', participantes)
app.post('/', postParticipante)
app.delete('/', deleteParticipante)

module.exports = app;
