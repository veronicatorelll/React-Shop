import styled from 'styled-components';

export const HeaderStyle = styled.div`
background-color: white;
opacity: 0.9;

`

export const Info = styled.p`
background-color: black;
opacity: 0.7;
color: white;
text-align: center;
`

export const Logo = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`

export const HeaderContent = styled.div`
display: flex;
height: 10vh;
align-items: center;
justify-content: space-around;
`

export const Dropdown = styled.div`
margin-right: 2vw;
position: relative;
`

export const DropdownCart = styled.div`
position: absolute;
display: ${props => props.toggleCart ? "block" : "none"};
margin-top: 4vh;
right: 0;
width: 15vw;
border: solid black 1.5px;
padding: 5px;
max-height: 80vh;
overflow: auto;
`