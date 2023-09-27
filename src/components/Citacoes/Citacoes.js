import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import Modal from '../Modal/Modal';
import Navegacao from './Navegacao/Navegacao';
import {BotaoNavegacao} from './Navegacao/NavegacaoStyle';
import axios from "axios";

import {
    DivCitacao,
    BotoesCitacao,
    RadioInline,
    SelectBlock,
    SelectDefault,
    LabelDefault
} from './CitacoesStyle';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Citacoes({processo}){
    const [tipoExpediente, setTipoExpediente] = useState('');
    const [modeloDocumento, setModeloDocumento] = useState('');
    const [conteudoEditor, setConteudoEditor] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = async () => {
        await sendToNotification()
        setModalIsOpen(true);
    };

    // TODO extrair para um arquivo de utils -> /utils/api.js
    const sendToNotification = async () => {
        const payload = JSON.stringify({
            number: extractPhoneNumberOfString(processo.whatsapp),
            messages: ["aqui vai o texto..."]
        })
        const headers = {headers:{"Content-Type" : "application/json"}}

        await axios.post(
            "http://localhost:3001/send/message", // TODO adicionar como variável de ambiente
            payload,
            headers
        )
    }

    const extractPhoneNumberOfString = (number) => {
        // TODO validar se é um número válido
        // TODO extrair apenas os números da string, o retorno deve ser 55<DD>911111111
        return 55 + number
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleTipoExpedienteChange = (e) => {
        const novoTipoExpediente = e.target.value;
        setTipoExpediente(novoTipoExpediente);
    };

    const handleModeloDocumentoChange = (e) => {
        const novoModeloDocumento = e.target.value;
        setModeloDocumento(novoModeloDocumento);

        const conteudo = alimentar_editor(novoModeloDocumento, processo);
        setConteudoEditor(conteudo);
    };

    const alimentar_editor = function(modelo_documento, processo){
        const modelo_execucao_fiscal = `
        JUSTIÇA FEDERAL SEÇÃO
        JUDICIÁRIA DA ${processo.estado}
        SUBSEÇÃO JUDICIÁRIA DE ${processo.cidade} - ${processo.numero_vara}ª VARA FEDERAL
        <br><br>
        Rua ${processo.rua} nº. ${processo.numero}, bairro ${processo.bairro}, ${processo.cidade}/${processo.estado}
        E-mail: ${processo.email} - Telefone: ${processo.telefone}
        <br><br>
        <b>PROCESSO Nº:</b> ${processo.num_processo} - ${processo.tipo_processo}<br>
        <b>EXEQUENTE:</b> ${processo.num_exequente}<br>
        <b>EXECUTADO:</b> ${processo.nome_executado}<br>
        <b>${processo.numero_vara}ª VARA FEDERAL - ${processo.estado}</b> (${processo.cargo_do_juiz})
        <br><br>
        <b>MANDADO DE CITAÇÃO</b>
        <br><br>
        <b>Executado(a):</b> ${processo.nome_executado}
        <br><br>
        <b>Endereço:</b> WhatsApp e E-mail: ${processo.whatsapp} e ${processo.email}.
        <br><br>
        <b>Valor da dívida: R$ ${processo.valor_divida}.</b>
        <br><br>
        O(A) JUIZ(A) FEDERAL ${processo.numero_vara}ª VARA/${processo.estado}, NA FORMA DA LEI ETC.
        <br><br>
        <b>MANDA</b> a qualquer Oficial de Justiça Avaliador deste Juízo Federal a quem for este apresentado, passado nos autos em epígrafe que, em seu cumprimento, dirija-se ao(s) endereço acima indicado(s) ou a outro local e, sendo aí:
        <br><br>
        <b>1) CITE o(s)</b> devedor(es) indicado(s), ou seu(s) representante(s) legal(is), para, no prazo de 03 (três) dias úteis, contados da citação, pagar a dívida (no valor acima indicado, com juros, multa de mora e encargos indicados na(s) Certidão(ões) da Dívida Ativa, conforme petição inicial e despacho que acompanham por cópia o presente, acrescida das custas judiciais), nomear bens livres e desembaraçados ou garantir a execução (por meio de fiança ou seguro garantia - com o acréscimo de 30% previsto no art. 848, parágrafo único, do CPC -, ou de depósito).
        <br><br>
        <b>2) INTIME-O(s)</b> para, na hipótese de não pagar a dívida nem garantir a execução, indicar, no prazo de citação (5 dias úteis), quais são e onde se encontram os bens sujeitos à penhora e seus respectivos valores.
        <br><br>
        <b>3) ADVIRTA-O(s)</b> de que: a) A não indicação de bens penhoráveis no prazo assinado qualifica-se como ato atentatório à dignidade da justiça (art. 774, V e parágrafo único, do CPC), sujeitando-o à incidência de multa de até 20% (vinte por cento) do valor atualizado do débito em execução, sem prejuízo de outras sanções de natureza processual ou material, multa essa que reverterá em proveito do credor, exigível na própria execução; b) Caso a CDA já não tiver especificado, fixo os honorários advocatícios em 20% (vinte por cento) do valor da execução proposta pela Fazenda Nacional e pelas autarquias e fundações públicas federais, nos termos da legislação específica (Decreto- Lei 1025/69; art. 5º da Lei 7.940/89); em 10%, em se tratando de cobrança de FGTS (art. 2º, § 4º, da Lei 8.844/94); e, quanto aos demais exequentes, em 10% (dez por cento) do valor da execução proposta, reduzindo-os à metade, nesta última hipótese, em caso de imediato pagamento ou parcelamento, nos termos do art. 827, caput, e § 1º, do CPC.
        <br><br>
        <b>4) CIENTIFIQUE o(a)(s)</b> executado(a)(s) de que: a) tem(têm) o prazo de 30 (trinta) dias úteis, nos termos do art. 16 da LEF, para opor Embargos à Execução, sob pena de, sendo o caso, se presumirem aceitos pelo(a) mesmo(a) como verdadeiros, os fatos articulados pelo(a) exequente;
        <br><br>
        <b>5) ADVIRTA</b> por fim, que "a requerente ingressou com o feito eletronicamente. A resposta a essa ação também terá de ser feita de modo eletrônico (Atos nº 112/2010 e 276/2010, do TRF 5ª Região). Os advogados devem efetuar o cadastro no endereço eletrônico https://pje.trf5.jus.br
        /pje/PessoaAdvogado/avisoCadastro.seam e assinar o termo de compromisso no primeiro acesso ao sistema de Processo Judicial Eletrônico - PJe, sendo obrigatória a utilização de CERTIFICAÇÃO DIGITAL.".
        <br><br>
        CUMPRA-SE. Dado e passado nesta cidade de ${processo.cidade}, Estado da ${processo.estado}, na data de validação pelo sistema. Digitado, conferido e assinado eletronicamente pelo(a) servidor(a) abaixo indicado.
        <br><br>
        Para verificar o conteúdo anexo ao presente expediente, utilizar o endereço e o(s) número(s) de validação do(s) documento(s) abaixo.
        <br><br>
        <b>Endereço:</b> ${processo.link_documento}<br>
        <b>Petição Inicial(número de validação):</b> ${processo.num_validacao}<br>
        <b>Despacho (número de validação):</b> ${processo.num_validacao}

        `;

        if(modelo_documento === 'execucao-fiscal'){
            return modelo_execucao_fiscal;
        }else{
            return ''
        }
    };

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
                    </DivCitacao>
                    <div className='div-flex gap-2 my-2'>
                        <div>
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
                        <SelectBlock>
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
                            <BotoesCitacao onClick={openModal}>Assinar Digitalmente</BotoesCitacao>
                            <BotoesCitacao>Gravar</BotoesCitacao>
                            <BotoesCitacao>Limpar</BotoesCitacao>
                        </div>
                    </div>
                </div>
            </DivCitacao>
            <Modal conteudo="Expediente central de mandados enviado com sucesso." isOpen={modalIsOpen} closeModal={closeModal} />
        </Layout>
    )
}

export default Citacoes;