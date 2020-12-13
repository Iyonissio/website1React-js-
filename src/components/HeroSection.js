import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>TOGGLE BRAINS</h1>
            <p>O Mundo das Tecnologias Espera por Ti!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>INICIAR</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                ASSISTIR APRESENTACAO<i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
