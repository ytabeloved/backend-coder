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



randNum();
Num.forEach(countFunc)
console.log(Num)
console.log(countObj);

//ejercicio 2
