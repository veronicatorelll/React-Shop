import styled from 'styled-components';

export const HeaderStyle = styled.div`
background-color: peachpuff;
`

export const Info = styled.p`
background-color: black;
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
background-color: peachpuff;
margin-top: 4vh;
right: 0;
width: 20vw;
border: solid black 2px;
padding: 5px;
`