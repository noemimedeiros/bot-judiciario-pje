import styled from 'styled-components';

export const LayoutDiv = styled.div`
    padding: 1%;
    background-color: #A0C1DE;
    height: 100vh;
`;

export const DivDefault = styled.div`
    padding: 1%;
    background-color: white;
    font-size: 0.8rem;
`;

export const BotoesDefault = styled.button`
    border: 2px solid #BFD6F8;
    border-radius: 5px;
    background: linear-gradient(to top, #BFD6F8, #FFFFFF);
    padding-inline: 10px;
    margin-inline: 4px;

    &:hover, &.active{
        background: linear-gradient(to top, #FFFFFF, #BFD6F8);
    }
`;