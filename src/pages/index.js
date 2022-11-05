import React from 'react'
import  {useState} from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar/index';
import HeroSection from '../component/HeroSection/index';

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
    </>
  )
}

export default Home
