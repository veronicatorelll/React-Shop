import styled from 'styled-components';

export const CartImage = styled.img`
max-height: 8vh;
max-width: 13vw;
margin: 10px 0px;
border-bottom: 1px solid #fafafa;
border-radius: 3px;
`

export const CartProductsContainer = styled.div`
margin-top: 1vh;
margin-bottom: 1vh;
display: flex;
flex-direction: column;
font-size: 0.7rem;
`

export const CartPriceQty = styled.p`
margin-top: 1vh;
`

export const CartButton = styled.button`
font-size: 0.7rem;
background-color: #E37F9D;
color: #fff;
border: 0;
padding: 4px;
border-radius: 8px;
cursor: pointer;
text-decoration: none;
margin: 2px;
`
export const CartTotal = styled.h4`
border-top: solid black 2px;
`
export const LinkContainer = styled.div`
display: flex;
justify-content: space-around;
`