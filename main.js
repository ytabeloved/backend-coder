let Num=[]
let countObj={}

const randNum = () =>{
    for(i=0; i<10;i++){
        Num.push(Math.floor(Math.random()*21)+1)
    }
    console.log(Num)
}


let countFunc = keys => {
    countObj[keys] = ++countObj[keys] || 1;
}



/*randNum();
Num.forEach(countFunc)
console.log(Num)
console.log(countObj);*/

//ejercicio 3

const momnt =require('moment');
const { diff } = require('semver')

let today = momnt(Date.now())
let bday = momnt('1987-11-04')


console.log(`hoy es ${today.format('DD/MM/YYYY')}`)
console.log(`naci el ${bday.format('DD/MM/YYYY')}`)
console.log(`naci hace ${today-bday.format('YYYY')}`)


