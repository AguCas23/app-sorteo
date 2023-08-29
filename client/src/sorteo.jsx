import { Form } from "./form"
import { useEffect, useState } from "react"

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

export const Sorteo = () => {

    const [datoState, setDatos] = useState(``)

    const numeroRandom = getRandomInt(datoState.length)

    const ganador = datoState[numeroRandom]

    const {dni, apellido, nombre} = ganador

    const listaParticipantes = async () => {
        try {
            const participantes = await fetch('http://localhost:3001/')
            const datos = await participantes.json()
            setDatos(datos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listaParticipantes()
        console.log(`el ganador es ${apellido}, ${nombre} con el dni ${dni}`)
    }, [])

    return (
        <>
            <h1>SORTEO ISJU</h1>
            <Form></Form>
        </>
    )
}
