import { useState } from "react"

export default function(){
    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const nome = event.target.name
        const valor = event.target.value
        setInputs(valores => ({...valores, [nome]: valor}))
    }
    // **************O resultado do formulario estará no Console********************
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome:
                    <input
                        type="text"
                        name="Nome"
                        valor={inputs.nome || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Digite sua idade: 
                    <input
                        type="number" 
                        name="Idade" 
                        value={inputs.idade || ""} 
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}