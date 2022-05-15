const controller = {}
const entre = true;
const longitud = 10;
const fibo1 = 1;
const fibo2 = 1;
controller.index = (req,res) =>{
    console.log('Hola desde controller');
    let fibonacci = 0;
    fibo = [fibo1,fibo2];
    for (let i = 0; i < longitud; i++) {
        fibonacci = fibo[i]+fibo[i+1];
        fibo.push(fibonacci);
    }
    console.log(fibo);
    return res.send(fibo);

}
module.exports = controller;