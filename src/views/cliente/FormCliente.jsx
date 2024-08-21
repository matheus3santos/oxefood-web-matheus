import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from '../../views/util/Util';







export default function FormCliente() {

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();


    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    function salvar() {

        let clienteRequest = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo
        }

        if (idCliente != null) { //Alteração:
            axios.put("http://localhost:8080/api/cliente/" + idCliente, clienteRequest)
                .then((response) => { notifySuccess('Cliente alterado com sucesso.') })
                .catch((error) => {
                    if (error.response.data.errors != undefined) {
                        for (let i = 0; i < error.response.data.errors.length; i++) {
                            notifyError(error.response.data.errors[i].defaultMessage)
                        }
                    } else {
                        notifyError(error.response.data.message)
                    }
                })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cliente", clienteRequest)
                .then((response) => { notifySuccess('Cliente cadastrado com sucesso.') })
                .catch((error) => {
                    if (error.response.data.errors != undefined) {
                        for (let i = 0; i < error.response.data.errors.length; i++) {
                            notifyError(error.response.data.errors[i].defaultMessage)
                        }
                    } else {
                        notifyError(error.response.data.message)
                    }
                })
        ;
        }

        useEffect(() => {
            if (state != null && state.id != null) {
                axios.get("http://localhost:8080/api/cliente/" + state.id)
                    .then((response) => {
                        setIdCliente(response.data.id)
                        setNome(response.data.nome)
                        setCpf(response.data.cpf)
                        setDataNascimento(response.data.dataNascimento)
                        setFoneCelular(response.data.foneCelular)
                        setFoneFixo(response.data.foneFixo)
                    })
            }
        }, [state])


        //Renderização dos componentes

        return (

            <div>

                <MenuSistema tela={'cliente'} />

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        {idCliente === undefined &&
                            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                        }
                        {idCliente != undefined &&
                            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                        }

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Nome'
                                        maxLength="100"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='CPF'>
                                        <InputMask
                                            required
                                            mask="999.999.999-99"
                                            value={cpf}
                                            onChange={e => setCpf(e.target.value)}
                                        />
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='Fone Celular'
                                        width={6}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={foneCelular}
                                            onChange={e => setFoneCelular(e.target.value)}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={6}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={foneFixo}
                                            onChange={e => setFoneFixo(e.target.value)}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Data Nascimento'
                                        width={6}
                                    >
                                        <InputMask
                                            mask="9999-99-99"
                                            maskChar={null}
                                            placeholder="Ex: 2005/03/19"
                                            value={dataNascimento}
                                            onChange={e => setDataNascimento(e.target.value)}
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
                                    <Link to={'/list-cliente'}>Voltar</Link>


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
                                    <Link to={'/list-cliente'}>Salvar</Link>

                                </Button>

                            </div>

                        </div>

                    </Container>
                </div>
            </div>

        );

    }
}
