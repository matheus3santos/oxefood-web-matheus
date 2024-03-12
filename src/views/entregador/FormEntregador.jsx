import React from "react";
import InputMask from 'react-input-mask';
import { Button, Checkbox, Container, Divider, Dropdown, DropdownMenu, Form, Icon } from 'semantic-ui-react';

export default function FormCliente() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    maxLength="7"
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}>

                                </Form.Input>



                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={10}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Numero'
                                    width={4}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={10}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={10}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={10}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Dropdown
                                    placeholder="UF"
                                    fluid
                                    selection>

                                </Dropdown>


                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={10}>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group inline >
                                Ativo:
                                <Form.Radio
                                    label="Sim"
                                    name='ativo'
                                    value='sim'

                                />

                                <Form.Radio
                                    label='Não'
                                    name='ativo'
                                    value='não'
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
