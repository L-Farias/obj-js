
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Bob Marley", 11122233309);


const cliente2 = new Cliente("Twin lesnister", 88822233309);


const contaCorrenteBob = new ContaCorrente(1001 , cliente1);


contaCorrenteBob.depositar(500);

const conta1 = new ContaCorrente(1001, cliente1);

const contaCorrenteTwin = new ContaCorrente(1001 , cliente2 );


contaCorrenteTwin.depositar = 200;

const conta2 = new ContaCorrente(1001 , cliente2);


let valor = 200;
contaCorrenteBob.tranferir(valor, conta2);





console.log(ContaCorrente.numeroDeContas);



