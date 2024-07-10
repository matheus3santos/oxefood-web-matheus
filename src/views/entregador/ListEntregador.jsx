import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function ListEntregador() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/entregador/' + idRemover)
        .then((response) => {
  
            console.log('Cliente removido com sucesso.')
  
            axios.get("http://localhost:8080/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            console.log('Erro ao remover um entregador.')
        })
        setOpenModal(false)
    }
 




    //Renderização dos componentes

    return (
        <div>
            <MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> entregador </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-entregador'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>nome</Table.HeaderCell>
                                    <Table.HeaderCell>cpf</Table.HeaderCell>
                                    <Table.HeaderCell>rg</Table.HeaderCell>
                                    <Table.HeaderCell>dataNascimento</Table.HeaderCell>
                                    <Table.HeaderCell>foneFixo</Table.HeaderCell>
                                    <Table.HeaderCell>foneCelular</Table.HeaderCell>
                                    <Table.HeaderCell>qtdEntregasRealizadas</Table.HeaderCell>
                                    <Table.HeaderCell>valorPorEntrega</Table.HeaderCell>
                                    <Table.HeaderCell>rua</Table.HeaderCell>
                                    <Table.HeaderCell>numero</Table.HeaderCell>
                                    <Table.HeaderCell>bairro</Table.HeaderCell>
                                    <Table.HeaderCell>cidade</Table.HeaderCell>
                                    <Table.HeaderCell>cep</Table.HeaderCell>
                                    <Table.HeaderCell>uf</Table.HeaderCell>
                                    <Table.HeaderCell>complemento</Table.HeaderCell>
                                    <Table.HeaderCell>ativo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(entregador => (

                                    <Table.Row key={entregador.id}>
                                        <Table.Cell>{entregador.nome}</Table.Cell>
                                        <Table.Cell>{entregador.cpf}</Table.Cell>
                                        <Table.Cell>{entregador.rg}</Table.Cell>
                                        <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                        <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                        <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                        <Table.Cell>{entregador.valorFrete}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoRua}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoNumero}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoBairro}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoCidade}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoCep}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoUf}</Table.Cell>
                                        <Table.Cell>{entregador.enderecoComplemento}</Table.Cell>
                                        <Table.Cell>{entregador.ativo}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
                                                icon>
                                                <Link to="/form-entregador" state={{ id: entregador.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>
                                            &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este entregador'
                                                icon
                                                onClick={e => confirmaRemover(entregador.id)}>


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