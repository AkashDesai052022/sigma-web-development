let a = prompt("enter a number");

let b = prompt("enter a second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed")
}
let sum = parseInt(a) + parseInt(b) 
// console.log("the sum is" , + sum);



// if user type a letter(without number) then we get Nan in console (not a number)
// for avioding this we use try & catch error handling  

function main (){
    let x = 1
    try{
        console.log("the sum is" , sum * x);
        return true;
    }catch(err){
        console.log(err.message)   // x is not defined
        console.log(err.stack)     //script.js:16 ReferenceError: x is not defined at script.js:13:38
        console.log(err.name)      //script.js:17 ReferenceError 
        return false;
    }finally{
        console.log("the connection has been closed and DB is closed");
    }
}
main()
// here finally used in function because it is important if error is arrive or not, but after return keyword , function will stop executing and return value. but if we use finally then finally was also executed 

