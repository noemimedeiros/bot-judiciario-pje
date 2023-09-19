import styled from 'styled-components';

export const DivCitacao = styled.div`
    padding: 1%;
    background-color: white;
    border: 1px solid #D9E7FB;
    font-size: 0.8rem;
`;

export const BotoesCitacao = styled.button`
    border: 2px solid #D9E7FB;
    border-radius: 5px;
    background: linear-gradient(to top, #D9E7FB, #FFFFFF);
    padding-inline: 10px;
    margin-inline: 4px;

    &:hover{
        background: linear-gradient(to top, #FFFFFF, #D9E7FB);
    }
`;

export const RadioInline = styled.div`
    display: flex;
    gap: 5px
`; 

export const SelectBlock = styled.div`
    display: grid
`;


export const SelectDefault = styled.select`
    background-color: #EBF1F8;
    border: 1px solid #D9E7FB;
    width: 350px;
`;

export const LabelDefault = styled.label`
    font-weight: 600;
`;