function Pessoa(props){
    return <li>Meu nome é {props.nome} e sou {props.cor}</li>
}

export default function ListaNomes(){

    const pessoas = [
        {nome:"Fábio", cor:"Preto"},
        {nome:"Lúcio", cor:"Pardo"},
        {nome:"Fátima", cor:"Amarela"}
    ]
    return(
        <>
            <h1>Lista Nomes:</h1>
            <ul>
                {pessoas.map((pessoa) => <Pessoa key={pessoa.nome} nome={pessoa.nome} cor={pessoa.cor}/>)}
            </ul>
        </>
    )
}