import React, { useEffect, useState } from 'react';

import firebase from './Config/Firebase';
import './App.css';

export default function App() {
    const [deviceToken, setDeviceToken] = useState(null);

    useEffect(() => {
        const messaging = firebase.messaging();

        messaging
            .requestPermission()
            .then(() => {
                return messaging.getToken()
            })
            .then(token => {
                console.log(`Your device token is: ${token}`)
                setDeviceToken(token);
            })
            .catch((err) => {
                console.log(err);

            })
    }, []);

    return (
        <div className="container">
            <div className="sub-container">
                <h4>Open debug console to check device token</h4>
            </div>
        </div>
    )
}