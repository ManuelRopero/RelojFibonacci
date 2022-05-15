const controller = {}

controller.index = (req,res) =>{
    console.log('Hola desde controller');
    const hora = req.params.hora;
    console.log(hora);
    fibo1 = parseInt(hora[19]);
    fibo2 = parseInt(hora[20]);
    longitud =parseInt(hora[22]+hora[23]);

    console.log(fibo1,fibo2,longitud);
    let fibonacci = 0;
    fibo = [fibo1,fibo2];
    for (let i = 0; i < longitud; i++) {
        fibonacci = fibo[i]+fibo[i+1];
        fibo.push(fibonacci);
    }
    const fiboJson = {
        sucFibo : fibo
    }
    console.log(fibo);
    return res.json(fiboJson);

}
module.exports = controller;