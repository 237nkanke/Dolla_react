import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
 import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: #000 ;
height:80px;
//   margin-top:-80px: 
display:flex;
justify-content: center;
align-items: center;
font-size:1rem;
position: sticky;
top:0;
z-index: 10;

@media screen and (max-width: 960px)
{
    transition: 0.8s all ease;
}
@media screen and (max-width: 760px)
{
    height:65px;
    transition: 0.8s all ease;
}

`


export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height:8px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px; 
`
export const NavLogo = styled(LinkR)`

justify-self: flex-start;
cursor:pointer;
height:22px;
font-family: bold;
font-weight: bold;
font-size:1.5rem;
display: flex;
align-items: center;
margin-left:24px;
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

export const MobileIcons = styled.div`
display: none;
@media screen  and (max-width :760px)
{
    display:block;
    height:20px;
  
    color:#fff;
    position:absolute;
    top:0px;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
}
 `

 export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 @media screen  and (max-width :760px){
    display:none;
 }
 `
 export const NavItem = styled.div`
 height: 80px;
 `
 export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 1rem;
 height: 100%;
 cursor: pointer;


 &.active{
    border-bottom: 3px solid #01bf71;
 }
 `

 export const NavButton = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width:760px)
 {
    display:none;
 }
 `

 export const NavButtonLink = styled(LinkR)`  
 border-radius:50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 font-size: 16px;
 font-weight: bold;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
 background: #fff;
 color: blue;
}
 `