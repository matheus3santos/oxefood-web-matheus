import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Dropdown, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";






export default function FormEntregador() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState('');
    const [valorPorEntrega, setValorPorEntrega] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');
    const [ativo, setAtivo] = useState('');

    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneFixo: foneFixo,
            foneCelular: foneCelular,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorPorEntrega: valorPorEntrega,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
            complemento: complemento,
            ativo: ativo
        }

        axios.post("http://localhost:8080/api/entregador", entregadorRequest).then((response) => {
            console.log('Entregador cadastrado com sucesso!');
        }).catch((error) => {
            console.log('Erro ao cadastrar entregador!');
        });
    }



    return (

        <div>
            <MenuSistema tela={'Entregador'} />


            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    maxLength="7"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
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
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorPorEntrega}
                                    onChange={e => setValorPorEntrega(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={10}
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Numero'
                                    width={4}
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={10}
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={10}
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={10}
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Select
                                fluid
                                label='UF'
                                options={uf}
                                placeholder='Selecione'
                                value={enderecoEstado}
                                onChange={(e, { setUf }) => {
                                    setEnderecoEstado(setUf)
                                }}
                            />

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={10}
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group inline>

                                <label>Ativo: </label>

                                <Form.Radio
                                    label='Sim'
                                    checked={ativo}
                                    onChange={e => setAtivo(true)}
                                />

                                <Form.Radio
                                    label='Não'
                                    checked={!ativo}
                                    onChange={e => setAtivo(false)}
                                />

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
                                Voltar
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
                                Salvar

                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
