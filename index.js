/*
Validação das funcionalidades bancarias

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Bob Marley", 11122233309);

const contaCorrenteBob = new ContaCorrente(cliente1, 1001);
contaCorrenteBob.depositar(200);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario =  new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
//const  conta = new Conta(0, cliente1, 1001);







console.log(contaPoupanca);
console.log(contaCorrenteBob);
console.log(contaSalario);

*/
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";
import{ Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"


const diretor =  new Diretor("Lancel Lenister", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Renly Baratheon",  5000, 12378945601);
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado, diretorEstaLogado);