import {Alert, View, Text, StyleSheet, Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import SocialSignInButtons from '@/components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import AppLogo from '@/components/AppLogo';
import stylesView from '@/components/Styles';
import { supabase} from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { session,updateUserData, setSession } = useAuth();
    const [loading, setLoading] = useState(false);

    //function to handle the sign in button press
    const signInWithEmail = async () => {
        setLoading(true);

        const { data: newData, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error || !newData) {
            console.error('Other error:', error?.message);
            //Alert.alert('Error signing in:', error?.message);
            setLoading(false);
            return;
        }
        
        const user = newData.session.user;
        const { data: userData, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('id', user?.id);

        if (fetchError) {
            throw fetchError;
        }
        if (userData) {
          // setSession(newData.session);
            navigation.navigate('Tabs', { screen : 'LearningMain' } );
        }
        setLoading(false);
    };
    //function to handle the forgot password button press
    const forgotPasswordPress = () => {
        //console.warn("Forgot password");
        navigation.navigate('ForgotPassword');
    }
    //function to handle the sign in with google button press
    const signInWithGoogle = () => {
        //console.warn("Sign in with Google");
    }
    //function to handle the sign in with facebook button press
    const signInWithFacebook = () => {
        //console.warn("Sign in with Facebook");
    }
    //function to handle the create account button press
    const createAccount = () => {
        //console.warn("Sign up");
        navigation.navigate('SignUp');
    }

    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 
    return (
            <View style={generatedStyles.root} >
                <SafeAreaView style={[generatedStyles.bigView, {backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    
                    <AppLogo />
                    <CustomInput
                        placeholder="Email"
                        value={email}
                        setValue={setEmail}
                        secureTextEntry={false}
                    />
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                    />

                    <CustomButton text={loading ? "Signing in..." :"Sign in"} onPress={signInWithEmail} type="primary" disabled={loading}/>
                    <CustomButton
                        text="Forgot password?"
                        onPress={forgotPasswordPress}
                        type="Tertiary"
                    />
                    <SocialSignInButtons />
                    <CustomButton
                        text="Don't have an account? Create one"
                        onPress={createAccount}
                        type="Tertiary"
                    />
                </SafeAreaView>
            </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
});

export default SignIn;
