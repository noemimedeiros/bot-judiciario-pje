import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarCienciaAsPartes from './components/DarCienciaAsPartes/DarCienciaAsPartes';
import PainelPrincipal from './components/PainelPrincipal/PainelPrincipal';
import Processo1 from './json/processos/processo1.json';
import Processo2 from './json/processos/processo2.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PainelPrincipal/>} />
        <Route path='/processo/1' element={<DarCienciaAsPartes processo={Processo1}/>} />
        <Route path='/processo/2' element={<DarCienciaAsPartes processo={Processo2}/>} />
      </Routes>
    </Router>
  );
}

export default App;
