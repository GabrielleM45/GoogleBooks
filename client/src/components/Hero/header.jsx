import React from 'react';
import Video from './shelf.mp4';


import { HeroContainer, HeroBg,  HeroVid } from './headerElements';

const HeroHeader = () => {



    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroVid autoPlay muted src={ Video } type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    );
};
export default HeroHeader;