import React from 'react';
import logo from '../../img/brasaoMini.png';
import {Logo, MainHeader, DivDetalhes, HeaderDivCenter} from './HeaderStyle';

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
            <DivDetalhes>
                <span>Dados do processo - 00000-00.0000.0.00.000 - Fluxo Geral Principal - Dar ciência às partes - MONITÓRIA</span>
            </DivDetalhes>
            <DivDetalhes>
                <span>Lembretes do processo</span>
            </DivDetalhes>
        </MainHeader>
    )
}

export default Header;