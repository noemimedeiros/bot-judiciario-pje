import React from 'react';
import Layout from '../Layout/Layout';
import Navegacao from './Navegacao/Navegacao';
import {BotaoNavegacao} from './Navegacao/NavegacaoStyle';
import {
    DivCitacao,
    BotoesCitacao,
    RadioInline,
    SelectBlock,
    SelectDefault,
    LabelDefault
} from './CitacoesStyle';

import MyCKEditor from './../CKEditor/CKEditor';

function Citacoes(){
    return (
        <Layout>
            <Navegacao></Navegacao>
            <DivCitacao>
                <div>
                    <BotoesCitacao>Processo Completo</BotoesCitacao>
                    <BotoesCitacao>Histórico de Tarefas</BotoesCitacao>
                </div>
                <br></br>
                <div>
                    <BotaoNavegacao>Expedientes</BotaoNavegacao>
                    <DivCitacao className='div-flex gap-2'>
                        <div>
                            <LabelDefault>Deseja vincular ato:</LabelDefault>
                            <RadioInline>
                                <div>
                                    <input name='vicular_ato' type="radio" id='vincular-ato-sim' checked></input>
                                    <label for='vincular-ato-sim'>Sim</label>
                                </div>
                                <div>
                                    <input name='vicular_ato' type="radio" id='vincular-ato-nao'></input>
                                    <label for='vincular-ato-nao'>Não</label>
                                </div>
                            </RadioInline>
                        </div>
                        <div>
                            <SelectBlock>
                                <LabelDefault for='tipo-expediente'>Tipo do expediente*</LabelDefault>
                                <SelectDefault name='tipo-expediente' id='tipo-expediente'>
                                    <option disabled selected>Selecione...</option>
                                    <option value='citacao'>Citação</option>
                                    <option value='licitacao'>Licitação</option>
                                </SelectDefault>
                            </SelectBlock>
                        </div>
                        <div>
                            <SelectBlock>
                                <LabelDefault for='modo-expedicao'>Modo de expedição*</LabelDefault>
                                <SelectDefault name='modo-expedicao' id='modo-expedicao'>
                                    <option disabled selected>Selecione...</option>
                                    <option>Central</option>
                                    <option>Via Sistema</option>
                                    <option>Correios</option>
                                    <option>Malote Digital</option>
                                    <option>Outros</option>
                                </SelectDefault>
                            </SelectBlock>
                        </div>
                    </DivCitacao>
                    <div class="my-2">
                        <label>Editor</label>
                        <MyCKEditor>
                            Editor
                        </MyCKEditor>
                        <div className='my-2'>
                            <BotoesCitacao>Assinar Digitalmente</BotoesCitacao>
                            <BotoesCitacao>Gravar</BotoesCitacao>
                            <BotoesCitacao>Limpar</BotoesCitacao>
                        </div>
                    </div>
                </div>
            </DivCitacao>
        </Layout>
    )
}

export default Citacoes;