import {citacao_execucao_fiscal} from './citacao/execucao_fiscal';
import {licitacao_execucao_fiscal} from './licitacao/execucao_fiscal';
import {cabecalho_modelos} from './partials/cabecalho';
import {rodape_modelos} from './partials/rodape';

export function montarModelo(modelo_documento, tipo_expediente, processo){
    const data_atual = new Date();
    const dia = data_atual.getDate().toString().padStart(2, '0');
    const mes = (data_atual.getMonth() + 1).toString().padStart(2, '0');
    const ano = data_atual.getFullYear();
    const data_atual_formatada = `${dia}/${mes}/${ano}`;

    let documento = cabecalho_modelos(processo);

    if (tipo_expediente === 'citacao'){
        if (modelo_documento === 'execucao-fiscal'){
            documento += citacao_execucao_fiscal(processo);
        }else{
            return ``;
        }
    }else if(tipo_expediente === 'licitacao'){
        if (modelo_documento === 'execucao-fiscal'){
            documento += licitacao_execucao_fiscal(processo);
        }else{
            return ``;
        }
    }
    documento += rodape_modelos(processo, data_atual_formatada)
    return documento;
}