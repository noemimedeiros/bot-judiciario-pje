import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Citacoes from './components/Citacoes/Citacoes';
import Layout from './components/Layout/Layout';
import Processo1 from './json/processos/processo1.json';
import Processo2 from './json/processos/processo2.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        </Route>
        <Route path='/citacao/1' element={<Citacoes processo={Processo1}/>}>
        </Route>
        <Route path='/citacao/2' element={<Citacoes processo={Processo2}/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
