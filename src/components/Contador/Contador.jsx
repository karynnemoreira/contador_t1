// import React, { useState } from "react" //importar o hook useState
// import "./Contador.css"

// function Contador() {

//     const [numero, setNumero] = useState(0)

//     //Criando uma função para adicionar 1 valor ao número
//     function Adicionar() {
//         if (numero < 20) { //Enquanto o número for menor que 20 faça isso \/
//             setNumero(numero + 1)
//         }
//     }

//     //setNumero é o responsável por atualizar o estado (numero)

//     //onClick está ativando a função a cada vez que for clicado


//     //Criando uma função para retirar 1 valor do número (arrow function)

//     const Subtrair = () => {
//         if(numero > 0){ //0 é menor que 0? NÃO, então pare por aqui.
//             setNumero(numero - 1)
//         }
//     }

//     //Criando uma função para limpar o contador , voltar ao estado inicial.

//     const Limpar = () => {
//         setNumero(0) //voltando ao estado 0
//     }

//     return (
//         <>
//             <h1>{numero}</h1>
//             <button onClick={Adicionar}>+</button>
//             <button onClick={Subtrair}>-</button>
//             <button onClick={Limpar}>C</button>
//         </>
//     )
// }

// export default Contador

import React, { useState } from "react" //importando o hook useState
import "./Contador.css" //arquivo Contador.css

//O que são hooks? 
//Hooks no react tem como funcionalidade a permição e manipulação de diversos recursos do react em componente de função.

//hook useState: O hook useState trabalha com estados, e os estados são o que armazem valores. 

function Contador() {

    //sintaxe do useState 
    const [numero, setNumero] = useState(0)

    //Função para adicionar um valor quando eu clicar no botão Add+1

    function Adicionar() {

        if (numero < 20) {
            setNumero(numero + 1)
        }
        //setNumero atualiza/modifica/seta o numero:  setNumero(o que quero que ele faça) pega o numero e some 1 valor  : setNumero(numero + 1)
    }

    //Função para diminuir um valor quando eu clicar no botão Remover -1

    function Remover() {
        if (numero > 0) {
            setNumero(numero - 1)
        }

    }

    //Função para Limpar o valor quando eu clicar no botão Limpar

    function Limpar() {
        setNumero(0) //setNumero para atualizar o numero, (receber o 0 pq se colocar (numero) ele vai pegar sempre as atualizações anteriores)
    }

    return (
        <section className="boxContador">
            <h2> {numero} </h2>
            <div className="boxButton">
                <button onClick={Adicionar}>Add + 1</button>
                <button onClick={Remover}>Remover - 1</button>
                <button onClick={Limpar}>Limpar</button>
            </div>

        </section>
    )
}

export default Contador