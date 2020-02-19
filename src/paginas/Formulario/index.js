import React from 'react'
import './style.css'
import CaixaTexto from '../../componentes/CaixaTexto'
import Select from '../../componentes/select'
import Btn from '../../componentes/Btn'
import Lista from '../Lista'

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueInicial: '',
            valueFinal: '',
            error: '',
            quantidade: '',
            rolagem: '',
        }
    }

    mudaRolagem = (value) => {
        this.setState({
            rolagem: value.target.value
        })
        console.log(this.state.rolagem);
    }

    mudaQuantidade = (value) => {
        this.setState({
            quantidade: value.target.value
        })
        console.log(this.state.quantidade);
    }


        onChangeInicial = (value) => {
            this.setState({
                valueInicial: value.target.value
            })
            console.log(this.state.valueInicial);
        }

        onChangeFinal = (value) => {
            this.setState({
                valueFinal: value.target.value
            })
            console.log(this.state.valueFinal);
        }


        mudaLista=(event) => {
            event.preventDefault()
            this.props.history.push({
                pathname: '/lista'
            })
        }

        render(){
            return (
                <div className="box_formulario">
                    <div>
                    <CaixaTexto
                        label='Digite o número inicial'
                        type='text'
                        placeholder='Número inicial'
                        onChange={this.onChangeInicial}
                    />
                    <CaixaTexto
                        label='Digite o número final'
                        type='text'
                        placeholder='Número final'
                        onChange={this.onChangeFinal}
                    />
                    </div>

                    <div class='caixa'>

                        <Select
                            classeSelect='select'
                            onChange={this.mudaQuantidade}
                        >
                            <option value='embranco'>Escolha a quantidade</option>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                        </Select>
                        <Select
                            onChange={this.mudaRolagem}
                            classeSelect='select'
                        >
                            <option value='embranco'>Escolha o tipo</option>
                            <option value='paginacao'>Paginação</option>
                            <option value='scroll'>Scroll</option>

                        </Select>


                    </div>
                    <div class='botao'>

                        <Btn
                            onClick={this.criaLista}
                        >
                            Criar
                       </Btn>
                    </div>
                    <div>
                        
                    </div>
                </div>
            )
        }
    }

    export default Formulario