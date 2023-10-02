export function citacao_execucao_fiscal(processo){ 
    return `
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
    `;
}