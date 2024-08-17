import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/home';

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import FormProduto from './views/produto/FormProduto';
import FormPromocao from './views/promocao/FormPromocao';
import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';


import ListCliente from './views/cliente/ListCliente';
import ListProduto from './views/produto/ListProduto';
import ListEntregador from './views/entregador/ListEntregador';
import ListPromocao from './views/promocao/ListPromocao';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />

                <Route path="form-cliente"      element={ <FormCliente/> } />
                <Route path="form-produto"      element={ <FormProduto/> } />
                <Route path="form-entregador"   element={ <FormEntregador/> } />
                <Route path="form-promocao"     element={ <FormPromocao/> } />
                <Route path="form-categoriaproduto" element={ <FormCategoriaProduto/> } />

                <Route path="list-cliente"      element={ <ListCliente/> } />
                <Route path="list-produto"      element={ <ListProduto/> } />
                <Route path="list-entregador"   element={ <ListEntregador/> } />
                <Route path="list-promocao"     element={ <ListPromocao/> } />
                <Route path="list-categoriaproduto" element={ <ListCategoriaProduto/> } />
            </Routes>
        </> 
    )
}

export default Rotas
