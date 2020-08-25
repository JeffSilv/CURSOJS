let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let num = [8, 1, 7, 5, 4]
for(let pos in num){
    console.log(`A posoção ${pos} tem o valor ${num[pos]}`)
}