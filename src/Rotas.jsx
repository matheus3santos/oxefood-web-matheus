import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './views/util/ProtectedRoute';


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
import FormLogin from './views/login/FormLogin';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />

                <Route path="form-cliente" element={<ProtectedRoute>
                    <FormCliente /> </ProtectedRoute>} />
                <Route path="form-produto" element={<ProtectedRoute>
                    <FormProduto /> </ProtectedRoute>} />
                <Route path="form-entregador" element={<ProtectedRoute>
                    <FormEntregador /> </ProtectedRoute>} />
                <Route path="form-promocao" element={<ProtectedRoute>
                    <FormPromocao /> </ProtectedRoute>} />
                <Route path="form-categoriaproduto" element={<ProtectedRoute>
                    <FormCategoriaProduto /> </ProtectedRoute>} />

                <Route path="list-cliente" element={<ProtectedRoute>
                    <ListCliente /> </ProtectedRoute>} />
                <Route path="list-produto" element={<ProtectedRoute>
                    <ListProduto /> </ProtectedRoute>} />
                <Route path="list-entregador" element={<ProtectedRoute>
                    <ListEntregador /> </ProtectedRoute>} />
                <Route path="list-promocao" element={<ProtectedRoute>
                    <ListPromocao /> </ProtectedRoute>} />
                <Route path="list-categoriaproduto" element={<ProtectedRoute>
                    <ListCategoriaProduto /> </ProtectedRoute>} />
            </Routes>
        </>
    )
}

export default Rotas
