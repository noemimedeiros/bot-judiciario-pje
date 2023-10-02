export function rodape_modelos(processo, data_atual){
    return `
    <br><br>
    <b>Para verificar o conteúdo anexo ao presente expediente, utilizar o endereço e o(s) número(s) de validação do(s) documento(s) abaixo.</b>
    <br><br>
    <b>Endereço:</b> ${processo.link_documento}<br>
    <b>Petição Inicial(número de validação):</b> ${processo.num_validacao}<br>
    <b>Despacho (número de validação):</b> ${processo.num_validacao}
    <br><br><br>

    Processo: <b>${processo.num_processo}</b><br>
    Assinado eletronicamente por:<br>
    <b>${processo.autor_processo} - ${processo.autor_processo_cargo}</b><br>
    <b>Data e hora da assinatura:</b> - ${data_atual}<br>
    <b>Identificador:</b> ${processo.identificador}<br>
    `;
}