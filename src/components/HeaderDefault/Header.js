import React from 'react';
import logo from '../../img/brasaoMini.png';
import {
    Logo,
    MainHeader,
    DivDetalhes,
    HeaderDivCenter,
    HeaderBotoesMain
} from './HeaderStyle';

function Header(){
    return (
        <MainHeader className='header'>
            <HeaderDivCenter className='header-div-center'>
                <div className="logo">
                    <Logo src={logo} />
                </div>
                <div className="titulo">
                    <h2>Processo Judicial Eletrônico</h2>
                    <h3>Justiça Federal</h3>
                </div>
                <div className="fale-conosco">
                    <a href="/" className='fale-conosco-link'>Fale conosco</a>
                </div>
            </HeaderDivCenter>
            <HeaderBotoesMain>
                <button>Home</button>
                <button>Audiência</button>
                <button>Cadastros Auxiliares</button>
                <button>Cadastros Básicos</button>
                <button>Painel</button>
                <button>Perícia</button>
                <button>Cadastros de Plantão</button>
                <button>Consulta</button>
                <button>RPV/PRC</button>
                <button>Cadastro</button>
                <button>Relatórios e Estatísticas</button>
            </HeaderBotoesMain>
        </MainHeader>
    )
}

export default Header;