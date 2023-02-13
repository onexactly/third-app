import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="/assets/hero.mp4" autoPlay loop muted />
      <Container>
        <MainHeading>Your Web-site Is Creative With Us</MainHeading>
        <HeroText>
          We Provide The Creative Web-sites For Clients All Over The World
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
