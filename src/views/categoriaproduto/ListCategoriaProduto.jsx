import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCategoriaProduto() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/categoriaProduto")
            .then((response) => {
                setLista(response.data)
            })
    }
   
    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/categoriaProduto/' + idRemover)
            .then((response) => {

                console.log('categoriaProduto removido com sucesso.')

                axios.get("http://localhost:8080/api/categoriaProduto")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um categoriaProduto.')
            })
        setOpenModal(false)
    }

    //Renderização dos componentes

    return (
        <div>
            <MenuSistema tela={'categoriaProduto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> categoriaProduto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-categoriaProduto'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>descricao</Table.HeaderCell>
                                    
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(categoriaProduto => (

                                    <Table.Row key={categoriaProduto.id}>
                                        <Table.Cell>{categoriaProduto.descricao}</Table.Cell>
                                        
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste categoriaProduto'
                                                icon>
                                                <Link to="/form-categoriaProduto" state={{ id: categoriaProduto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>
                                            &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este categoriaProduto'
                                                icon
                                                onClick={e => confirmaRemover(categoriaProduto.id)}
                                            >

                                                <Icon name='trash' />

                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                
                        <Modal
                            basic
                            onClose={() => setOpenModal(false)}
                            onOpen={() => setOpenModal(true)}
                            open={openModal}
                        >
                            <Header icon>
                                <Icon name='trash' />
                                <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                            </Header>
                            <Modal.Actions>
                                <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                                    <Icon name='remove' /> Não
                                </Button>
                                <Button color='green' inverted onClick={() => remover()}>
                                    <Icon name='checkmark' /> Sim
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>

                </Container>
            </div>
        </div>
    )
}




