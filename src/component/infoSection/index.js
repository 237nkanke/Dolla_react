import React from 'react'
import {InfoContainer,InfoRow,InfoWarper,Column1,TextWarper,TopLine,Heading,SubTitle,BtnWarp,Column2,ImgWarp,Img} from './InfoElenent'
import {Button} from '../ButtonElement';
const InfoSection = ({lightBg,id,imgStart,topLine,LightText,headLine,darkText,description,buttonLable,img,alt,primary,dark,dark2}) => {
  return (
    <>
      <InfoContainer lightBg = {lightBg} id={id}>
            <InfoWarper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWarper>
                            <TopLine>{topLine}</TopLine>
                            <Heading LightText ={LightText}>{headLine}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWarp>
                                <Button to={'home'} 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80} 
                                primary={primary ? 1: 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLable}</Button>
                            </BtnWarp>
                        </TextWarper>
                    </Column1>
                    <Column2>
                        <ImgWarp>
                        <Img src={img} alt={alt} />
                        
                        </ImgWarp>
                    </Column2>
                </InfoRow>
            </InfoWarper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
