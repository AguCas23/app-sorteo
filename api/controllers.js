const { Participante } = require('./db')

const addParticipante = async (dni, nombre, apellido, telefono, email) => {
    return await Participante.create({dni, nombre, apellido, telefono, email})
}

const allParticipantes = async () => {
    return Participante.findAll()
}

module.exports = {
    addParticipante,
    allParticipantes
}