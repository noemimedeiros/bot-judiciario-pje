import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import {
    DivDefault,
    BotoesDefaultAba,
    LabelDefault,
    RadioInline
} from '../Layout/LayoutStyle';
import Header from '../HeaderDefault/Header';
import {DivDetalhes, DivMainDetalhes} from '../HeaderDefault/HeaderStyle';
import {TableProcessos} from './PainelPrincipalStyle';
import Navegacao from './Navegacao/Navegacao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperclip,
  faPencilAlt,
  faThumbtack,
  faUser,
  faGlasses,
  faStickyNote,
  faFolder 
} from '@fortawesome/free-solid-svg-icons';

function PainelPrincipal() {
    const [processos, setProcessos] = useState([]);

    useEffect(() => {
        const importProcessos = () => {
        const context = require.context('/src/json/processos', false, /\.json$/);
        const processosArray = context.keys().map((key) => context(key));
        setProcessos(processosArray);
        };

        importProcessos();
    }, []);

    return (
        <Layout header={<Header/>}>
            <DivMainDetalhes>
                <DivDetalhes>
                    <span>Visualização dos agrupadores</span>
                </DivDetalhes>
            </DivMainDetalhes>
            <Navegacao></Navegacao>
            <DivDefault>
                <div className='row'>
                    <div className='col-5'>
                        <div>
                        <BotoesDefaultAba className='active'>Caixas</BotoesDefaultAba>
                        <DivDefault className='border-default'>
                            <div className='my-2'>
                                <LabelDefault>Deseja vincular ato:</LabelDefault>
                                <RadioInline>
                                    <div>
                                        <input name='filtrar_processos' type="radio" id='filtrar-todos' defaultChecked></input>
                                        <label htmlFor='filtrar-todos'>Todos</label>
                                    </div>
                                    <div>
                                        <input name='filtrar_processos' type="radio" id='filtrar-civel-penal'></input>
                                        <label htmlFor='filtrar-civel-penal'>Cível/Penal</label>
                                    </div>
                                    <div>
                                        <input name='filtrar_processos' type="radio" id='filtrar-execucao-fiscal'></input>
                                        <label htmlFor='filtrar-execucao-fiscal'>Execução Fiscal</label>
                                    </div>
                                </RadioInline>
                            </div>
                            <div className='border-default d-block my-3'>
                                <DivDetalhes>Localizar Processo</DivDetalhes>
                                <div className='px-2 pb-2'>
                                    <div><b>Número do processo</b></div>
                                    <div>
                                    <input type='text' name='localizar-processo' placeholder='08000155-45.2022.4.02.8205'></input>
                                    </div>
                                    <b>Controlar Devolução de Expediente</b>
                                </div>
                            </div>
                            <div className='my-2'>
                                <div>
                                    <b>Tarefas de Processos</b>
                                    <div>
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon className='text-warning' icon={faFolder}/> Controlar Devolução de Expediente</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </DivDefault>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='border-default p-1'>
                            <div><DivDetalhes>Pesquisar</DivDetalhes></div>
                            <div><DivDetalhes>Processos</DivDetalhes></div>
                            <TableProcessos>
                                <thead>
                                    <tr>
                                        <th><FontAwesomeIcon className='text-warning fa-2x' icon={faStickyNote}/></th>
                                        <th><b>Processo</b></th>
                                        <th><b>Assunto</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {processos.map((processo, index) => (
                                        <tr className='border-default'>
                                            <td>
                                                <a title='Ver Processo' className='text-muted mx-1' href='/'><FontAwesomeIcon icon={faPaperclip} /></a>
                                                <a title='Abrir a Tarefa' className='text-warning me-1' href={`processo/`+(parseInt(index)+1)}><FontAwesomeIcon icon={faPencilAlt} /></a>
                                                <a title='Realizar Tarefa' className='text-primary me-1' href='/'><FontAwesomeIcon icon={faGlasses} /></a>
                                                <a className='text-success me-1' href='/'><FontAwesomeIcon icon={faUser} /></a>
                                                <a title='Fixar Tarefa' className='text-info mx-1' href='/'><FontAwesomeIcon icon={faThumbtack} /></a>
                                            </td>
                                            <td className='border-default'>
                                                <b>{processo.tipo_processo}</b>
                                                <div>{processo.num_processo}</div>
                                                <b>AUTOR </b>{processo.autor_processo}
                                                <div><b>RÉU </b>{processo.nome_executado}</div>
                                                <div>{processo.numero_vara} VARA FEDERAL</div>
                                            </td>
                                            <td>
                                                Compromisso
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableProcessos>
                        </div>
                    </div>
                </div>
            </DivDefault>
        </Layout>
    );
}

export default PainelPrincipal;