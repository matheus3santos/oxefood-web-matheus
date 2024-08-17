import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from "../../MenuSistema";




export default function FormCategoriaProduto() {

    const { state } = useLocation();
    const [idcategoriaProduto, setIdcategoriaProduto] = useState();
    const [descricao, setDescricao] = useState('');


    function salvar() {

        let categoriaProdutoRequest = {
            descricao: descricao,
          
        }

        if (idcategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoriaProduto/" + idcategoriaProduto, categoriaProdutoRequest)
                .then((response) => { console.log('categoriaProduto alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um categoriaProduto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoriaProduto", categoriaProdutoRequest)
                .then((response) => { console.log('categoriaProduto cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o categoriaProduto.') })
        }
        ;
    }

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/categoriaProduto/" + state.id)
                .then((response) => {
                    setIdcategoriaProduto(response.data.id)
                    setDescricao(response.data.descricao)

                })
        }
    }, [state])


    //Renderização dos componentes

    return (

        <div>

            <MenuSistema tela={'categoriaProduto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idcategoriaProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> categoriaProduto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idcategoriaProduto != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> categoriaProduto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='descricao'
                                    maxLength="100"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
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
                                <Link to={'/list-categoriaProduto'}>Voltar</Link>


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
                                <Link to={'/list-categoriaProduto'}>Salvar</Link>

                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
