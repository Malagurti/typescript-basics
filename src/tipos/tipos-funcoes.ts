import idade from './tipo-numerico'

let minhaIdade: number
minhaIdade = 20

function retornaIdade(): number{
  return idade && minhaIdade
}

console.log(retornaIdade())

// Tipos de return de funcao
function calculoRH(preco: number, quantidade: number): number {
  return preco * quantidade
}

console.log(calculoRH(12,2))