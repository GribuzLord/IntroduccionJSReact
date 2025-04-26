//Ternario
const auth=true;
const saldo=1000;
const pagar=1200;
const tarjeta=false;

saldo>pagar ? 
    console.log("Si puedes pagar"):
    tarjeta ? 
    console.log("Si puedes pagar con tarjeta"):
    console.log("No, no puedes pagar");