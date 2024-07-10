import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from "../../MenuSistema";

export default function FormPromocao() {

    const { state } = useLocation();
    const [idPromocao, setIdPromocao] = useState();


    const [titulo, setTitulo] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [regra, setRegra] = useState('');
    const [valorDesconto, setValorDesconto] = useState('');

    function salvar() {

        let promocaoRequest = {
            titulo: titulo,
            dataInicio: dataInicio,
            dataFim: dataFim,
            regra: regra,
            valorDesconto: valorDesconto
        }

        if (idPromocao != null) { //Alteração:
            axios.put("http://localhost:8080/api/promocao/" + idPromocao, promocaoRequest)
                .then((response) => { console.log('Promocao alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um promocao.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/promocao", promocaoRequest)
                .then((response) => { console.log('Promocao cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o promocao.') })
        }
        ;
    }

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/promocao/" + state.id)
                .then((response) => {
                    setIdPromocao(response.data.id)
                    setTitulo(response.data.titulo)
                    setDataInicio(response.data.dataInicio)
                    setDataFim(response.data.dataFim)
                    setRegra(response.data.regra)
                    setValorDesconto(response.data.valorDesconto)
                })
        }
    }, [state])


    //Renderização dos componentes

    return (

        <div>

            <MenuSistema tela={'promocao'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idPromocao === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Promocao &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idPromocao != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Promocao &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    width={16}
                                    label='Titulo'
                                    placeholder='Informe o titulo da promoção'
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Regra'
                                    width={16}
                                    style={{ height: '6em' }}
                                    value={regra}
                                    onChange={e => setRegra(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor desconto'
                                    width={6}
                                    value={valorDesconto}
                                    onChange={e => setValorDesconto(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Data Inicio'
                                    width={6}
                                >
                                    <InputMask
                                        mask="9999-99-99"
                                        maskChar={null}
                                        placeholder="Ex: 2005/03/19"
                                        value={dataInicio}
                                        onChange={e => setDataInicio(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data Fim'
                                    width={6}
                                >
                                    <InputMask
                                        mask="9999-99-99"
                                        maskChar={null}
                                        placeholder="Ex: 2005/03/19"
                                        value={dataFim}
                                        onChange={e => setDataFim(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-promocao'}>Voltar</Link>


                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                <Link to={'/list-promocao'}>Salvar</Link>

                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
