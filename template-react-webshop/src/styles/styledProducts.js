import styled from 'styled-components';

export const Image = styled.img`
max-height: 16vh;
max-width: 13vw;
margin: 20px 0px;
border-bottom: 1px solid #fafafa;
border-radius: 3px;
`

export const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 60vw;
margin-top: 3vh;
margin-bottom: 1vh;
margin-left: 20vw;
`

export const ProductContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: solid pink 2px;
background-color: #F4BECF;
margin: 1vw;
width: 18vw;
padding-top: 1vh;
padding-bottom: 1vh;
`

export const ProductPrice = styled.p`
margin-top: 1vh;
`

export const ProductsForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
`

export const ProductsButton = styled.button`
background-color: #E37F9D;
color: #fff;
border: 0;
padding: 8px;
border-radius: 8px;
cursor: pointer;
text-decoration: none;
`

export const ProductsInput = styled.input`
border-radius: 8px;
width: 4vw;
margin-left: 0.5vw;
margin-right: 0.5vw;
`