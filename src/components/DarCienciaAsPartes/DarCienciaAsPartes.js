import axios from "axios";
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import Modal from '../Modal/Modal';
import Header from './Header/Header';
import Navegacao from './Navegacao/Navegacao';

import {montarModelo} from './modelos/montarModelo';

import {
    DivDetalhes,
    DivMainDetalhes
} from '../HeaderDefault/HeaderStyle';

import {
    DivDefault,
    BotoesDefault,
    RadioInline,
    SelectBlock,
    SelectDefault,
    LabelDefault,
    BotoesDefaultAba
} from '../Layout/LayoutStyle';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function DarCienciaAsPartes({processo}){
    const navigate = useNavigate();

    const [tipoExpediente, setTipoExpediente] = useState('');
    const [modeloDocumento, setModeloDocumento] = useState('');
    const [conteudoEditor, setConteudoEditor] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = async () => {
        await sendToNotification()
        setModalIsOpen(true)
    };

    // TODO extrair para um arquivo de utils -> /utils/api.js
    const sendToNotification = async () => {
        const payload = JSON.stringify({
            number: extractPhoneNumberOfString(processo.whatsapp),
            email: processo.email,
            messages: [
                `Bom dia, sou Oficial de Justiça da Justiça Federal, ${processo.numero_vara} Vara da Subseção de ${processo.cidade} - ${processo.estado}`,
                `Citação acerca de um processo de execução fiscal`,
                `Estou citando o/a senhor(a), certo?`
            ]
        })
        const headers = {headers:{"Content-Type" : "application/json"}}

        try {
            await axios.post(
                "http://localhost:3001/send/message", // URL da sua API
                payload,
                headers
            );
        
            console.log("Notificação enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar notificação:", error);
        }

        // const formData = new FormData();

        // const canvas = await html2canvas(document.getElementsByClassName('ck-content')[0]);
        // const imgData = canvas.toDataURL('image/png');
        
        // const pdf = new jsPDF('p', 'mm', 'a4');
        // pdf.addImage(imgData, 'PNG', 10, 10, 190, 277);
        // const processoPdf = pdf.output('blob');

        // formData.append('number', extractPhoneNumberOfString(processo.whatsapp));
        // formData.append('messages', [
        //     `Bom dia, sou Oficial de Justiça da Justiça Federal, ${processo.numero_vara} Vara da Subseção de ${processo.cidade} - ${processo.estado}`,
        //     `Citação acerca de um processo de execução fiscal`,
        //     `Estou citando o/a senhor(a), certo?`,
        // ]);
        // formData.append('pdf', processoPdf, `${processo.num_processo}.pdf`);

        // try {
        //     await axios.post('http://localhost:3001/send/message', formData, {
        //         headers: { 'Content-Type': 'multipart/form-data' },
        //     });
        //     console.log('Notificação enviada com sucesso!');
        // } catch (error) {
        //     console.error('Erro ao enviar notificação:', error);
        // }

    }

    const extractPhoneNumberOfString = (number) => {
        // TODO validar se é um número válido
        // TODO extrair apenas os números da string, o retorno deve ser 55<DD>911111111
        return 55 + number
    }

    const closeModal = () => {
        setModalIsOpen(false);
        navigate('/');
    };

    const handleTipoExpedienteChange = (e) => {
        const novoTipoExpediente = e.target.value;
        setTipoExpediente(novoTipoExpediente);

        const conteudo = alimentar_editor(modeloDocumento, novoTipoExpediente, processo);
        setConteudoEditor(conteudo);
    };

    const handleModeloDocumentoChange = (e) => {
        const novoModeloDocumento = e.target.value;
        setModeloDocumento(novoModeloDocumento);

        const conteudo = alimentar_editor(novoModeloDocumento, tipoExpediente, processo);
        setConteudoEditor(conteudo);
    };

    const alimentar_editor = function(modelo_documento, tipo_expediente, processo){
        return montarModelo(modelo_documento, tipo_expediente, processo);
    };

    return (
        <Layout header={<Header processo={processo}/>}>
            <DivMainDetalhes>
                <DivDetalhes>
                    <span>Dados do processo - {processo.num_processo} - Fluxo Geral Principal - Dar ciência às partes - MONITÓRIA</span>
                </DivDetalhes>
                <DivDetalhes>
                    <span>Lembretes do processo</span>
                </DivDetalhes>
            </DivMainDetalhes>
            <Navegacao></Navegacao>
            <DivDefault>
                <div>
                    <BotoesDefault>Processo Completo</BotoesDefault>
                    <BotoesDefault>Histórico de Tarefas</BotoesDefault>
                </div>
                <br></br>
                <div>
                    <BotoesDefaultAba className='active'>Expedientes</BotoesDefaultAba>
                    <DivDefault className='border-default d-flex gap-2'>
                        <div>
                            <LabelDefault>Deseja vincular ato:</LabelDefault>
                            <RadioInline>
                                <div>
                                    <input name='vicular_ato' type="radio" id='vincular-ato-sim' defaultChecked></input>
                                    <label htmlFor='vincular-ato-sim'>Sim</label>
                                </div>
                                <div>
                                    <input name='vicular_ato' type="radio" id='vincular-ato-nao'></input>
                                    <label htmlFor='vincular-ato-nao'>Não</label>
                                </div>
                            </RadioInline>
                        </div>
                        <div>
                            <SelectBlock>
                                <LabelDefault htmlFor='tipo-expediente'>Tipo do expediente*</LabelDefault>
                                <SelectDefault
                                    onChange={handleTipoExpedienteChange}
                                    value={tipoExpediente}
                                    name='tipo-expediente'
                                    id='tipo-expediente'
                                >
                                    <option disabled defaultValue=''>Selecione...</option>
                                    <option value='citacao'>Citação</option>
                                    <option value='licitacao'>Licitação</option>
                                </SelectDefault>
                            </SelectBlock>
                        </div>
                        <div>
                            <SelectBlock>
                                <LabelDefault htmlFor='modo-expedicao'>Modo de expedição*</LabelDefault>
                                <SelectDefault 
                                    name='modo-expedicao'
                                    id='modo-expedicao'
                                >
                                    <option disabled defaultValue=''>Selecione...</option>
                                    <option>Central</option>
                                    <option>Via Sistema</option>
                                    <option>Correios</option>
                                    <option>Malote Digital</option>
                                    <option>Outros</option>
                                </SelectDefault>
                            </SelectBlock>
                        </div>
                    </DivDefault>
                    <div className='div-flex gap-2'>
                        <div className="my-4">
                            <LabelDefault>Documento sigiloso?</LabelDefault>
                            <RadioInline>
                                <div>
                                    <input name='sigiloso' type="radio" id='vsigiloso-sim' defaultChecked></input>
                                    <label htmlFor='sigiloso-sim'>Sim</label>
                                </div>
                                <div>
                                    <input name='sigiloso' type="radio" id='vsigiloso-nao'></input>
                                    <label htmlFor='sigiloso-nao'>Não</label>
                                </div>
                            </RadioInline>
                        </div>
                        <SelectBlock className="my-4">
                            <LabelDefault htmlFor='modelo-documento'>Modelo de Documento</LabelDefault>
                            <SelectDefault
                                onChange={handleModeloDocumentoChange}
                                value={modeloDocumento}
                                name='modelo-documento'
                                id='modelo-documento'
                            >
                                <option disabled defaultValue=''>Selecione...</option>
                                <option value='execucao-fiscal'>14ª Vara - Mandato de Citação - Execução Fiscal</option>
                                <option value='acao-monitoria'>14ª Vara - Mandato de Citação por Ação Monitória</option>
                            </SelectDefault>
                        </SelectBlock>
                    </div>
                    <div className="my-2">
                        <label>Editor</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={conteudoEditor}
                        />
                        <div className='my-2'>
                            <BotoesDefault onClick={openModal}>Assinar Digitalmente</BotoesDefault>
                            <BotoesDefault>Gravar</BotoesDefault>
                            <BotoesDefault>Limpar</BotoesDefault>
                        </div>
                    </div>
                </div>
            </DivDefault>
            <Modal conteudo="Expediente central de mandados enviado com sucesso." isOpen={modalIsOpen} closeModal={closeModal} />
        </Layout>
    )
}

export default DarCienciaAsPartes;