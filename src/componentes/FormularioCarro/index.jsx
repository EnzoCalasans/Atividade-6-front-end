import { useState } from "react"

export default function FormularioCarro(){
    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const nome = event.target.name
        const valor = event.target.value
        setInputs(valores => ({...valores, [nome]:valor}))
    } 
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(inputs)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome do carro:
                    <input
                        type="text"
                        name="Carro"
                        valor={inputs.nome || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Ano do carro:
                    <input
                        type="number"
                        name="Ano"
                        value={inputs.idade}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit"/>
            </form>
        </>
    )
}