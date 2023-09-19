import React from 'react';
import {BotaoNavegacao, DivNavegacao} from './NavegacaoStyle';

function Navegacao(){
    return (
        <DivNavegacao>
            <BotaoNavegacao>Saída</BotaoNavegacao>
            <BotaoNavegacao>Anexar Documentos</BotaoNavegacao>
            <BotaoNavegacao>Documentos do Processo</BotaoNavegacao>
        </DivNavegacao>
    )
}

export default Navegacao;