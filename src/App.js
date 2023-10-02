import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarCienciaAsPartes from './components/DarCienciaAsPartes/DarCienciaAsPartes';
import Layout from './components/Layout/Layout';
import Header from './components/HeaderDefault/Header'
import {DivDetalhes} from './components/HeaderDefault/HeaderStyle';
import Processo1 from './json/processos/processo1.json';
import Processo2 from './json/processos/processo2.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <Layout header={<Header/>}>
          <DivDetalhes>
              <span>Visualização dos agrupadores</span>
          </DivDetalhes>
        </Layout>} />
        <Route path='/processo/1' element={<DarCienciaAsPartes processo={Processo1}/>} />
        <Route path='/processo/2' element={<DarCienciaAsPartes processo={Processo2}/>} />
      </Routes>
    </Router>
  );
}

export default App;
