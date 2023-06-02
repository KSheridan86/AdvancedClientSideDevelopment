import React from 'react';

const ShoppingList = () => {
    const items = [
    {
        name: 'Duesenberg Starplayer TV Mike Campbell',
        link: 'https://www.thomann.de/gb/duesenberg_starplayer_ltd_mike_campbell.html',
        pic:  'https://images.static-thomann.de/pics/bdb/233311/7810707_800.jpg'
    },
    {
        name: 'Weber Gas BBQ',
        link: 'https://www.weber.com/IE/en/barbecues/gas-barbecues/summit/summit-s-670-gbs-gas-barbecue/7370074.html',
        pic:  'https://product-images.weber.com/Grill-Images/Gas/7370079B_1800x1800.png?w=800&h=800&auto=compress%2cformat'
    }
    ];

    return (
    <div>
        <h1 className="center">My Shopping List</h1>
        <hr></hr>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                <h3>{item.name}</h3>
                <img src={item.pic} alt={item.name} />
                <br></br>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
                <hr></hr>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default ShoppingList;