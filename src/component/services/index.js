import React from 'react'
import Icon1 from '../../images/1.png'
import Icon2 from '../../images/2.png'
import Icon3 from '../../images/3.png'
import {ServicesContainer,ServiceH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElement'
const Services = () => {
  return (
    <>
     <ServicesContainer id="services">
        <ServiceH1>Our Services</ServiceH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon  src={Icon1}/>
                <ServicesH2>Learn how to code</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente earum sint molestias ipsum.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon  src={Icon2}/>
                <ServicesH2>Virtual world</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente earum sint molestias ipsum.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon  src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente earum sint molestias ipsum.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
     </ServicesContainer> 
    </>
  )
}

export default Services
