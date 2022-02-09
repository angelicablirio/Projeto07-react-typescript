import styled from "styled-components";

export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
 
  img{
    width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button{
    display: block;
    margin-top: 8px;
    background-color: #ff5254;
    color: #FFF;
    border: none;
    border-radius: 10px;
    padding: 4px 8px;
    cursor: pointer;
    transition: .5s;
    
    &:hover{
      background-color: #e83535;
    }
  }
`;