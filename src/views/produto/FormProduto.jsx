import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    placeholder='Informe o titulo do produto'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo do Produto'
                                    placeholder='Informe o titulo do produto'
                                />


                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    width={16}
                                    style={{ height: '6em' }}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label={<label style={{fontSize:'12px'}}>Tempo de Entrega Mínimo em Minutos</label>}
                                    placeholder='30'
                                />

                                <Form.Input

                                    required
                                    fluid
                                    label={<label style={{fontSize:'12px'}}>Tempo de Entrega Máximo em Minutos</label>}
                            placeholder='40'
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
                            Listar
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
            </div >
        </div >

    );

}
