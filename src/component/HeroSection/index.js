import React from "react";
import { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";
const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Learn How To Code</HeroH1>
          <HeroP>
            Sign Up Know To Register For The 2023/2024 Session For Free.
          </HeroP>
          <HeroBtn>
            <Button
              to="/signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
