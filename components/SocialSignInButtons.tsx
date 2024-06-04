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
                bgColor="#E7EAF4"  
                fontColor="#8360c3" 
                icon="google"
            />
            <CustomButton
                text="Sign in with Facebook"
                onPress={signInWithFacebook}
                type="Primary"
                bgColor="#E7EAF4"  
                fontColor="#8360c3" 
                icon="facebook"
            />
        </>
    );
};

export default SocialSignInButtons;
