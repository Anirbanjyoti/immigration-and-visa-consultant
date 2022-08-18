import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            <h1>put your address</h1>
        </div>
    );
};

export default Checkout;