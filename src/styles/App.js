import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #756161;
color : #333333;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 
export const Content = styled.div`
background-color: #ffff;
display: flex;
flex-direction: row;
width: 50%;
height: 40%;
box-sizing: border-box;
padding: 12px;
gap: 8px;
`

export const Row = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

export const Column = styled.div`
width: 100%;
margin: 0%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`