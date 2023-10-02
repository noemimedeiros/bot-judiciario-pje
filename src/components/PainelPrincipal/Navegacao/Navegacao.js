import React from 'react';
import {BotaoNavegacao, DivNavegacao} from './NavegacaoStyle';

function Navegacao(){
    return (
        <DivNavegacao>
            <BotaoNavegacao className='active'>Caixas</BotaoNavegacao>
            <BotaoNavegacao>Expedientes</BotaoNavegacao>
        </DivNavegacao>
    )
}

export default Navegacao;