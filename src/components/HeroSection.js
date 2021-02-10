import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import { HeroContainer } from './HeroElements';

function HeroSection() {
    return (
        <HeroContainer>
            <div className='hero-container'>  
                <h1>TOGGLE BRAINS</h1>
                <p>O Mundo das Tecnologias Espera por Ti!</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>INICIAR</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    ASSISTIR APRESENTACAO<i className='far fa-play-circle'/></Button>
                    </div>
            </div>  
        </HeroContainer>
        
        
    )
}

export default HeroSection
