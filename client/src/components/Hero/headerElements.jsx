import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';

export const HeroContainer = styled.div `

    background: #2f3136;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px 3px;
    height: 500px;
    position: relative;
    z-index: 1;
    object-fit: contain;


    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`
export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    :before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%
    }
`

export const HeroVid = styled.video `
    width: 100%;
    height: 100%;
    o-object-fit: cover;
    object-fit: fill;
    background: #2f3136;
`

export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1 `
    color: #242424;
    font-size: 52px;
    text-align: center;
    font-family: 'Josefin Slab', serif;
    text-shadow: 2px 4px 2px #aaa;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    :before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;

}
`

export const HeroP = styled.p `
    margin-top: 20px;
    font-size: 28px;
    text-align: center;
    max-width: 600px;
    color: #242424;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    :before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;

}
`

export const HeroBtnWrapper = styled.div `
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroArrowDown = styled(AiOutlineDown)
`
    margin: auto;
    font-size: 50px;
`

export const HeroArrowDown2 = styled(FaChevronDown)
`
    margin: auto;
    font-size: 50px;
`