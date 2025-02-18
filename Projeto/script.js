// // const clicou = () => {
//     console.log ("Você clicou no botão")
// }

let lista= document. querySelectorAll('.item')
console.log(lista)

let next= document. getElementById('.proximo')
let prev= document. getElementById('.anterior')

let contar = lista.length
let ativo = 0
console.log(contar) 

next.onclick = () =>{
    console.log ("proximo")
}