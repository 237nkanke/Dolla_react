import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const NavLogo = styled(LinkR)`

justify-self: flex-start;
cursor:pointer;
height:22px;
font-family: bold;
font-weight: bold;
font-size:1.5rem;
display: flex;
align-items: center;
margin-left:100px;
font-weight:bold;
text-decoration:none;
background-image: linear-gradient(to top,#ff0844 0%, #ffb199 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color:transparent;
-moz-text-fill-color: transparent;
@media screen and (max-width: 760px)
{
    margin-left:35px;
    font-weight: bold;
    background-image: linear-gradient(to top,#1a07c7 0%, #466adf 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color:transparent;
    -moz-text-fill-color: transparent;
    height:20px;
    font-size: 20px
    transition: 0.8s all ease;
}
`