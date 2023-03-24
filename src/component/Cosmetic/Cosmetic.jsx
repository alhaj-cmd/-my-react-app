import React from 'react';
import { count, shows } from '../Shoes/Shoes';

import add from '../Utilities/Calculate';

const Cosmetic = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second)
    const first1 = 55;
    const second1 =5;
    const result =shows(first1, second1)
    const num1 = 5;
    const num2 =5;
    const count1 = count(num1, num2)
    console.log(total, result, count1)

    const cosmetics = [
        {id: 1, name:'alta', price: 100},
        {id: 2, name:'ala', price: 200},
        {id: 3, name:'lta', price: 1000},
        {id: 4, name:'ata', price: 400},
        {id: 5, name:'tea', price: 500},
        {id: 6, name:'sno', price: 600},
    ]
    return (
        <div>
            <h4>Hello</h4>
            <p>total: {total}</p>
            <h3>shows: {result}</h3>
            <p>Count : {count1}</p>
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }
        </div>
    );
};

export default Cosmetic;