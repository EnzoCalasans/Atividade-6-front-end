function Fruta(props){
    return <li>{props.nome} tem o sabor {props.sabor}</li>
}

export default function ListaFrutas(){
    const frutas = [
        {nome: "Banana", sabor: "Doce"},
        {nome: "Abacaxi", sabor: "Azedo"},
        {nome: "Melão", sabor: "Doce"}
    
    ]
    return(
        <>
            <h1>Lista de Frutas:</h1>
            <ul>{frutas.map((fruta) => <Fruta key={fruta.nome} nome={fruta.nome} sabor={fruta.sabor}/>)}</ul>
        </>
    )
}