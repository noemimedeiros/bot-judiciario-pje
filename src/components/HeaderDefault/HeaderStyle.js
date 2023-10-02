import styled from 'styled-components';

export const Logo = styled.img`
  width: 12vh;
  padding: 5px;
`;

export const MainHeader = styled.header`
  background-color: #A0C1DE;
  color: white;
  padding-bottom: 10px;
`;

export const DivDetalhes = styled.div`
  background: linear-gradient(to top, #BFD6F8, #FFFFFF);
  color: #757A94;
  padding: 2px;
  margin-bottom: 5px;
  border: 1px solid #A0C1DE;
  box-shadow: 0px 0px 0px 1px white;
  font-weight: 600;
`;

export const DivMainDetalhes = styled.div`
  padding-bottom: 35px;
`;

export const HeaderDivCenter = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 5px;
`;

export const HeaderBotoesMain = styled.div`
  background: linear-gradient(to top, #BFD6F8, #FFFFFF);
  display:flex;
  text-align: center;
  gap: 15px;
  box-shadow: 0px 0px 0px 1px white;
  margin-top: 10px;
  padding-left: 15px;

  &>button{
    padding: 6px;
    background-color: transparent;
    border: none;
    color: #757A94;
    font-weight: 600;
  }

  &>button:hover, &>button.active{
    border-bottom: 2px solid white;
    background-color: #FFFFFF85;
    border: none;
    color: #757A94;
    font-weight: 600;
  }
`;
