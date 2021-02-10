import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Veja alguns locais lindos para viajar</h1>
            <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/Moz2.jpg"
                    text="Disfrute do Melhor"
                    label="Ilhas Maldivas"
                    path='/services'
                    />;

                    <CardItem 
                    src="images/img-2.jpg"
                    text="Disfrute do Melhor"
                    label="Hawai"
                    path='/services'
                    />
                </ul>

                <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Disfrute do Melhor"
                    label="Peru"
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-4.jpg"
                    text="Disfrute do Melhor"
                    label="Belos Locais"
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-1.jpg"
                    text="Disfrute dos Melhores locais turisticos do Mundo"
                    label="Tecnologia no Deserto"
                    path='/services'
                    />
                </ul>
             </div>
            </div>
            
        </div>
    )
}

export default Cards;
