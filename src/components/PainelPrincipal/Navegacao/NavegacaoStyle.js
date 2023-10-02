import styled from 'styled-components';

export const BotaoNavegacao = styled.button`
    border: 1px solid white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    background: linear-gradient(to top, #BFD6F8, #FFFFFF);
    margin-inline: 2px;
    padding-inline: 10px;

    &:hover, &.active{
        background: linear-gradient(to top, #FFFFFF, #BFD6F8);
    }
`;

export const DivNavegacao = styled.div`
    margin-top: -21px
`;