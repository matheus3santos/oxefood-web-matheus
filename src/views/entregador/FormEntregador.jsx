import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Dropdown, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from '../../views/Util';


export default function FormEntregador() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState('');
    const [valorFrete, setValorFrete] = useState('');
    const [enderecoRua, setRua] = useState('');
    const [enderecoNumero, setNumero] = useState('');
    const [enderecoBairro, setBairro] = useState('');
    const [enderecoCidade, setCidade] = useState('');
    const [enderecoCep, setCep] = useState('');
    const [enderecoUf, setEnderecoEstado] = useState('');
    const [enderecoComplemento, setComplemento] = useState('');
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
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            enderecoComplemento: enderecoComplemento,
            ativo: ativo
        }

        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => { notifySuccess('Entregador cadastrado com sucesso.') })
            .catch((error) => {
                if (error.response.data.errors != undefined) {
                    for (let i = 0; i < error.response.data.errors.length; i++) {
                        notifyError(error.response.data.errors[i].defaultMessage)
                    }
                } else {
                    notifyError(error.response.data.message)
                }
            })
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
                                    label='RG'>
                                    <InputMask
                                        placeholder="Ex: 9.999.999"
                                        required
                                        mask="9.999.999"
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
                                    />
                                </Form.Input>



                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={10}>
                                    <InputMask
                                        mask="9999-99-99"
                                        maskChar={null}
                                        placeholder="Ex: 2005/03/19"
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
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={10}
                                    value={enderecoRua}
                                    onChange={e => setRua(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Numero'
                                    width={4}
                                    value={enderecoNumero}
                                    onChange={e => setNumero(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={10}
                                    value={enderecoBairro}
                                    onChange={e => setBairro(e.target.value)}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={10}
                                    value={enderecoCidade}
                                    onChange={e => setCidade(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={10}
                                    value={enderecoCep}
                                    onChange={e => setCep(e.target.value)}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Select
                                fluid
                                label='UF'
                                options={[
                                    { key: 'PE', text: 'Pernambuco' },
                                    { key: 'BA', text: 'Bahia' },
                                    { key: 'PR', text: 'Paraná' },
                                    { key: 'SP', text: 'São Paulo' },
                                    { key: 'RJ', text: 'Rio de Janeiro' },
                                    { key: 'MG', text: 'Minas Gerais' },
                                    { key: 'RS', text: 'Rio Grande do Sul' },
                                    { key: 'SC', text: 'Santa Catarina' },
                                    { key: 'AM', text: 'Amazonas' },
                                    { key: 'PA', text: 'Pará' },
                                    { key: 'TO', text: 'Tocantins' },
                                    { key: 'MA', text: 'Maranhão' },
                                    { key: 'PI', text: 'Piauí' },
                                    { key: 'CE', text: 'Ceará' },
                                    { key: 'RN', text: 'Rio Grande do Norte' },
                                    { key: 'PB', text: 'Paraíba' },
                                    { key: 'AL', text: 'Alagoas' },
                                    { key: 'SE', text: 'Sergipe' },
                                    { key: 'RO', text: 'Rondônia' },
                                    { key: 'AC', text: 'Acre' },
                                    { key: 'RR', text: 'Roraima' },
                                    { key: 'AP', text: 'Amapá' },
                                    { key: 'DF', text: 'Distrito Federal' },
                                    { key: 'GO', text: 'Goiás' },
                                    { key: 'MT', text: 'Mato Grosso' },
                                    { key: 'MS', text: 'Mato Grosso do Sul' },
                                    { key: 'ES', text: 'Espírito Santo' },
                                ]}
                                placeholder='Selecione'
                                value={enderecoUf}
                                onChange={(e, { value }) => {
                                    setEnderecoEstado(value)
                                }}


                            />

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={10}
                                    value={enderecoComplemento}
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
