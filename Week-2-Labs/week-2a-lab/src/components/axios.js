import axios from 'axios';

axios.get('https://api.example.com/data')
    .then(response => {
        console.log("I've been sent from axios!");
    })
        .catch(error => {
        console.error(error);
    });