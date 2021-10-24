import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { pagego } from '../../constants/pagego';
import { ExternalLinks } from '../Projects/ProjectsStyles'
const Hero = (props) => (
 
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To  <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
         You are here happy to see you ! on a mission 
         to making a path that glows the world with Technologies😎
        </SectionText>
        <ExternalLinks href={pagego.v}>Click Here</ExternalLinks>
      </LeftSection>
    </Section>
  </>
);

export default Hero;