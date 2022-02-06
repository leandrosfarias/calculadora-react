import React, { Component } from "react";
import './Calculadora.css';
import Botao from "../Componentes/Botao";
import Display from "../Componentes/Display";

const estadoInicial = {
    valorDisplay: '0',
    limparDisplay: false,
    operacao: null,
    valores: [0, 0],
    current: 0
};

export default class Calculadora extends Component {

    state = {...estadoInicial};

    constructor(props) {
        super(props);
        this.limparMemoria = this.limparMemoria.bind(this);
        this.setOperacao = this.setOperacao.bind(this);
        this.addDigito = this.addDigito.bind(this);
    };

    limparMemoria() {
        this.setState({...estadoInicial});
    };

    setOperacao(operacao) {
        console.log(operacao);
    };

    addDigito(n) {
        console.log(n);
    };

    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.valorDisplay} />
                <Botao label="AC" click={this.limparMemoria} triplo />
                <Botao label="/" click={this.setOperacao} operacao />
                <Botao label="7" click={this.addDigito} />
                <Botao label="8" click={this.addDigito} />
                <Botao label="9" click={this.addDigito} />
                <Botao label="*" click={this.setOperacao} operacao />
                <Botao label="4" click={this.addDigito} />
                <Botao label="5" click={this.addDigito} />
                <Botao label="6" click={this.addDigito} />
                <Botao label="-" click={this.setOperacao} operacao />
                <Botao label="1" click={this.addDigito} />
                <Botao label="2" click={this.addDigito} />
                <Botao label="3" click={this.addDigito} />
                <Botao label="+" click={this.setOperacao} operacao />
                <Botao label="0" click={this.addDigito} dobro />
                <Botao label="." click={this.addDigito} />
                <Botao label="=" click={this.setOperacao} />
            </div>
        );
    };
};
