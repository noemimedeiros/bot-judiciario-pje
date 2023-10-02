import styled from 'styled-components';

export const TableProcessos = styled.table`
    width: 100%;
    border: 1px solid #BFD6F8 !important;

    &>thead{
        text-align: center;
        background-color: #ECF4FE;

        th{
            padding: 1rem;
            border: 1px solid #BFD6F8 !important;

        }
    }

    &>tbody{
        align-items: middle;

        tr{
            border: 1px solid #BFD6F8 !important;
            td{
                padding: 0.5rem;
                a{
                    font-size: 1rem;
                }
            }
            td:first-child{
                text-align: center;
            }
        }
    }
`;