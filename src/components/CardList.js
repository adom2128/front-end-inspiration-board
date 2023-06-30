import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <section>
            <ul>
                {cards.map((card) => {
                    <Card
                        id={card.id}
                        message={card.message}
                        likes_count={card.likes_count}
                    />
                })};
            </ul>
        </section>
    );
};

export default CardList;