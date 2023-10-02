import React from 'react';
import logo from '../../../img/brasaoMini.png';
import {Logo, MainHeader, HeaderDivCenter} from '../../HeaderDefault/HeaderStyle';

function Header({processo}){
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
        </MainHeader>
    )
}

export default Header;