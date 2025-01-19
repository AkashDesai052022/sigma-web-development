let random = Math.floor(Math.random()*10)
console.log(random)

function solution (a, b){
    if(random < 5){
        console.log(a,"+", b,"=", a-b)
        console.log(a,"*", b,"=", a+b)
        console.log(a,"-", b,"=", a/b)
        console.log(a,"/", b,"=", a**b)
    }
    else{
        console.log(a,"+", b,"=",a+b)
        console.log(a,"-", b,"=",a-b)
        console.log(a,"*", b,"=",a*b)
        console.log(a,"/", b,"=",a/b)
    }
}
solution (5,2)