import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
// import { Link as LinkS } from 'react-scroll'
// import { Link as LinkR } from 'react-router-dom'
//  import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
 top : ${({ isOpen }) => ( isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarWrapper = styled.div`
color: #fff;`
export const SidebarLink = styled.div`
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer; 
font-size:20px;


&:hover{
    color: #01bf71;
transition: 0,2s ease-in-out ;
}
`
export const SideBtn = styled.div`
display:flex;
justify-content: center;
@media screen and(max-width: 760px){ 
    margin-top:-20px;
  }
`
export const SidebarMenu = styled.div`
display:grid;
grid-template-columns:  1fr;
grid-template-rows: repeat(5 , 70px);
text-align: center;

@media screen and(max-width: 480px){ 
  grid-template-rows:repeat(6 , 60px);
}
`
export const SidebarRout = styled(LinkR)`
border-radius: 50px;
background-image: linear-gradient(to top,#1a07c7 0%, #466adf 100%);
white-space: nowrap;
padding: 13px 60px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
background: #fff;
color: #0106 06;
}
`