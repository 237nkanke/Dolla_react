import React from 'react'
import  {useState} from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar/index';
import HeroSection from '../component/HeroSection/index';
import InfoSection from '../component/infoSection/index';
import { Home2, Home3, Homebject } from '../component/infoSection/Dater';

const Home = () => {
const [isOpen,setIsOpen] = useState(false); 

const toggle = () => {
    setIsOpen(!isOpen);
}

  return (
    <>
      <Sidebar isOpen = {isOpen}  toggle = {toggle}/>
        <Navbar to="/" toggle = {toggle}></Navbar>
        <HeroSection />
        <InfoSection {...Homebject}/>
        <InfoSection {...Home2}/>
        <InfoSection {...Home3}/>
    </>
  )
}

export default Home
