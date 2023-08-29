const {
    addParticipante,
    allParticipantes
} = require('./controllers')


const participantes = async (req, res) => {
    try{
        const response = await allParticipantes()
        res.status(200).json(response)
    }catch(error) {
        res.status(404).json({error: error.message})
    }
}
const postParticipante = async (req, res) => {
    const { dni,nombre,apellido,telefono,email } = req.body
    console.log(dni,nombre,apellido,telefono,email)
    try {
        const response = await addParticipante(dni, nombre, apellido, telefono, email)
        res.status(201).json(response)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}
const deleteParticipante = (req, res) => {
    res.send('se borró un participante')
    console.log(req)
}
module.exports = {
    participantes,
    postParticipante,
    deleteParticipante
}