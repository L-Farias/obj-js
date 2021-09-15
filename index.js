
import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPupanca.js";


const cliente1 = new Cliente("Bob Marley", 11122233309);

const contaCorrenteBob = new ContaCorrente(cliente1, 1001);
contaCorrenteBob.depositar(200);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

//const  conta = new Conta(0, cliente1, 1001);







console.log(contaPoupanca);
console.log(contaCorrenteBob);



