import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Veja alguns dos nossos Productos</h1>
            <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                
                 <CardItem 
                 src="images/img-6.jpg"
                 text="Disfrute dos Productos de Melhor Qualidade no Mercado"
                 label="Tecnologia no Deserto"
                 path='/services'
                 ></CardItem>
                 <CardItem 
                 src="images/img-2.jpg"
                 text="Disfrute dos Productos de Melhor Qualidade no Mercado"
                 label="Tecnologia no Deserto"
                 path='/services'
                 ></CardItem>
                </ul>
                <ul className="cards__items">
                 <CardItem 
                 src="images/img-9.jpg"
                 text="Disfrute dos Productos de Melhor Qualidade no Mercado"
                 label="Tecnologia"
                 path='/services'
                 ></CardItem>
                 <CardItem 
                 src="images/img-4.jpg"
                 text="Disfrute dos Productos de Melhor Qualidade no Mercado"
                 label="Tecnologia no Deserto"
                 path='/services'
                 ></CardItem>
                 <CardItem 
                 src="images/img-1.jpg"
                 text="Disfrute dos Productos de Melhor Qualidade no Mercado"
                 label="Tecnologia no Deserto"
                 path='/services'
                 ></CardItem>
                </ul>
             </div>
            </div>
            
        </div>
    )
}

export default Cards
