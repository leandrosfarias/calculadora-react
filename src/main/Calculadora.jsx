import React, { Component } from "react";
import './Calculadora.css';
import Botao from "../Componentes/Botao";

export default class Calculadora extends Component {
    render() {
        return (
            <div className="calculadora">
                <Botao label="AC"/>
                <Botao label="/"/>
                <Botao label="7"/>
                <Botao label="8"/>
                <Botao label="9"/>
                <Botao label="*"/>
                <Botao label="4"/>
                <Botao label="5"/>
                <Botao label="6"/>
                <Botao label="-"/>
                <Botao label="1"/>
                <Botao label="2"/>
                <Botao label="3"/>
                <Botao label="+"/>
                <Botao label="0"/>
                <Botao label="."/>
                <Botao label="="/>
            </div>
        );
    }
}
