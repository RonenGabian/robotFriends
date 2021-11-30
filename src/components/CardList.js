import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    //if(true){
    //    throw new Error('NOOOO');
    //}
    return (
        <div>
            {
                robots.map((r, i) => {
                    return (
                        <Card
                            key={i}
                            id={r.id}
                            name={r.name}
                            email={r.email} />
                    );
                })
            }
        </div>
    )
}
export default CardList;