import { useState } from "react"
export const Form = () => {
    const [formState, setForm] = useState({
        dni: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    })

    const { dni, nombre, apellido, telefono, email } = formState

    const handleInputs = ({ target }) => {
        const { name, value } = target

        setForm({
            ...formState,
            [name]: value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch("http://localhost:3001/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formState),
            });
        }
        catch(error){
            console.log(error)
        }
        setForm({
            dni: '',
            nombre: '',
            apellido: '',
            telefono: '',
            email: ''
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="number"
                    name="dni"
                    placeholder="DNI"
                    value={dni}
                    onChange={handleInputs}
                />
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={handleInputs}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={handleInputs}
                />
                <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={handleInputs}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleInputs}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
