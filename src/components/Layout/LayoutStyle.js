import styled from 'styled-components';

export const LayoutDiv = styled.div`
    padding: 1%;
    background-color: #A0C1DE;
    height: 100%;
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




export const RadioInline = styled.div`
    display: flex;
    gap: 15px
`; 

export const SelectBlock = styled.div`
    display: grid
`;


export const SelectDefault = styled.select`
    background-color: #EBF1F8;
    border: 1px solid #BFD6F8;
    width: 350px;
`;

export const LabelDefault = styled.label`
    font-weight: 600;
`;

export const BotoesDefaultAba = styled.button`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    background: linear-gradient(to top, #BFD6F8, #FFFFFF);
    margin-inline: 2px;
    padding-inline: 10px;
    border: 1px solid #BFD6F8;

    &:hover, &.active{
        background: linear-gradient(to top, #FFFFFF, #BFD6F8);
        border-bottom: 2px solid white;
        margin-bottom: -1px;
    }
`;