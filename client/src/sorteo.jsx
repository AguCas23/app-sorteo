import { Form } from "./form"
import { useEffect, useState } from "react"

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

export const Sorteo = () => {

    const [datoState, setDatos] = useState([])

    const sortear = () => {
        if(datoState.length < 0) return
        const numeroRandom = getRandomInt(datoState.length)

        const ganador = datoState[numeroRandom]

        const { apellido, nombre } = ganador

        alert(`El ganador es ${apellido}, ${nombre}`)
    }

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
    }, [])

    return (
        <>
            <h1>SORTEO ISJU</h1>
            <Form fn={listaParticipantes}></Form>
            <ul>
                {datoState && datoState.map((elemento) => <li key={elemento.id}>{elemento.dni} {elemento.apellido} {elemento.nombre} {elemento.telefono} {elemento.email}</li>)}
            </ul>
            <button onClick={sortear}>Sortear</button>
        </>
    )
}
