import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from '../../views/Util';

export default function FormCliente() {
    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    // Use useEffect at the top level of the component
    useEffect(() => {
        if (state && state.id) {
            axios.get(`http://localhost:8080/api/cliente/${state.id}`)
                .then((response) => {
                    setIdCliente(response.data.id);
                    setNome(response.data.nome);
                    setCpf(response.data.cpf);
                    setDataNascimento(response.data.dataNascimento);
                    setFoneCelular(response.data.foneCelular);
                    setFoneFixo(response.data.foneFixo);
                })
                .catch(error => {
                    notifyError("Erro ao carregar dados do cliente.");
                });
        }
    }, [state]);

    const salvar = () => {
        const clienteRequest = {
            nome,
            cpf,
            dataNascimento,
            foneCelular,
            foneFixo
        };

        const url = idCliente
            ? `http://localhost:8080/api/cliente/${idCliente}`
            : "http://localhost:8080/api/cliente";
        
        const request = idCliente ? axios.put(url, clienteRequest) : axios.post(url, clienteRequest);

        request
            .then(() => {
                notifySuccess(idCliente ? 'Cliente alterado com sucesso.' : 'Cliente cadastrado com sucesso.');
            })
            .catch((error) => {
                if (error.response?.data?.errors) {
                    error.response.data.errors.forEach(err => notifyError(err.defaultMessage));
                } else {
                    notifyError(error.response?.data?.message || 'Erro ao salvar cliente.');
                }
            });
    };

    return (
        <div>
            <MenuSistema tela={'cliente'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2>
                        <span style={{ color: 'darkgray' }}>
                            Cliente &nbsp;<Icon name='angle double right' size="small" />
                        </span> 
                        {idCliente ? ' Alteração' : ' Cadastro'}
                    </h2>

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
                                onClick={salvar}
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
