import React, { useEffect } from 'react';
import './github.css';

const apiKey = process.env.REACT_APP_GH;
console.log(process.env.REACT_APP_GH)
const Github = () => {
    useEffect(() => {
        fetch('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'bearer apiKey' 
            },
        })
        .then(response => {
            console.log(response)
        })
    })
    return (
        <div></div>
    )
}

export default Github;