import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
    const signInWithGoogle = () => {
        console.warn('Sign in with Google');
    };

    const signInWithFacebook = () => {
        console.warn('Sign in with Facebook');
    };

    return (
        <>
            <CustomButton
                text="Sign in with Google"
                onPress={signInWithGoogle}
                type="Primary"
                bgColor="#FAE9EA"  
                fontColor="#DD4D44" 
            />
            <CustomButton
                text="Sign in with Facebook"
                onPress={signInWithFacebook}
                type="Primary"
                bgColor="#E7EAF4"  
                fontColor="#4765A9" 
            />
        </>
    );
};

export default SocialSignInButtons;
