export function cabecalho_modelos(processo){
    return `
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
        <br><br></br>
    `
}