export function licitacao_execucao_fiscal(processo){
    return `
    <b>MANDADO DE INTIMAÇÃO</b>
    <br><br>
    <b>MANDA</b> a qualquer Oficial de Justiça deste Juízo que, em lhe sendo exibido o presente mandado,
    diante da alegação do seu <b>AVC (id. 12188513)</b>, em seu cumprimento INTIME membro da família
    do senhor <b>${processo.nome_executado}</b> no endereço <b>${processo.rua}, ${processo.numero}, ${processo.bairro}, CEP ${processo.cep} - ${processo.cidade}</b> para, querendo, <b>no prazo de 15 (quinze) dias úteis</b>,
    apresente declaração médica atestando à sua incapacidade
    <br><br>
    CUMPRA-SE. Dado e passado nesta cidade de ${processo.cidade}, Estado da ${processo.estado}, na data de validação pelo sistema. Digitado, conferido e assinado eletronicamente pelo(a) servidor(a) abaixo indicado.
    `;
}