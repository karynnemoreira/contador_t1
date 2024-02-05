import React, { useState } from "react" //importar o hook useState
import "./Contador.css"

function Contador() {

    const [numero, setNumero] = useState(0)

    //Criando uma função para adicionar 1 valor ao número
    function Adicionar() {
        if (numero < 20) { //Enquanto o número for menor que 20 faça isso \/
            setNumero(numero + 1)
        }
    }

    //setNumero é o responsável por atualizar o estado (numero)

    //onClick está ativando a função a cada vez que for clicado


    //Criando uma função para retirar 1 valor do número (arrow function)

    const Subtrair = () => {
        if(numero > 0){ //0 é menor que 0? NÃO, então pare por aqui.
            setNumero(numero - 1)
        }
    }

    //Criando uma função para limpar o contador , voltar ao estado inicial.

    const Limpar = () => {
        setNumero(0) //voltando ao estado 0
    }

    return (
        <>
            <h1>{numero}</h1>
            <button onClick={Adicionar}>+</button>
            <button onClick={Subtrair}>-</button>
            <button onClick={Limpar}>C</button>
        </>
    )
}

export default Contador