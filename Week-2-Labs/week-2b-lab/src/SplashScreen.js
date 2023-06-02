import React from 'react';

const SplashScreen = () => {
    const websites = [
    {
        name: 'PirateBay',
        description: "Arrrggh matey, it's time to sail the high seas!",
        link: 'https://piratebay.party/'
    },
    {
        name: 'OnlyFans',
        description: 'Are you a real fan?',
        link: 'https://onlyfans.com/'
    },
    // Add more websites here
    ];

    return (
    <div>
        <h1 className="center">My Favorite Websites (in no particular order)</h1>
        <hr></hr>
        <ul>
            {websites.map((website, index) => (
                <li key={index}>
                <h3>{website.name}</h3>
                <p>{website.description}</p>
                <a href={website.link} target="_blank" rel="noopener noreferrer">Visit</a>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default SplashScreen;