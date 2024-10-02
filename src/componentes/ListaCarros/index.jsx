function Carro(props){
    return <li>Carro: {props.marca}</li>
}

export default function ListaCarros() {

    const carros = [
        {id:1, marca:"Ford"},
        {id:2, marca:"Gol"},
        {id:3, marca:"Fiat"}
    ]

    return(
        <>
            <h1>Lista de Carros:</h1>
            <ul>
                {carros.map((carro) => <Carro key={carro.id} marca={carro.marca}/>)}
            </ul>
        </>
    )
}