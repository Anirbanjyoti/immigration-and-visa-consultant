import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const About = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    
    return (
        <div className='my-40 w-1/2 mx-auto'>
        <img src={user?.photoURL} alt='images'></img>
            <h1 className='text-3xl'>Name: {user?.displayName}</h1>
            <h1 className='text-2xl'>Email: {user?.email}</h1>
        </div>
    );
};

export default About;