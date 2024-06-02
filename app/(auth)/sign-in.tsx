import {Alert, View, Text, StyleSheet, Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import SocialSignInButtons from '@/components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import AppLogo from '@/components/AppLogo';
import stylesView from '@/components/Styles';
import { supabase} from '@/lib/supabase';
//import { nativeViewHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

const SignIn = () => {
    //const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
    //    setLoading(true);
    //    const {error} = await supabase.auth.signInWithPassword({  email, password});
    //    if (error) Alert.alert(error.message);
    //    setLoading(false);
       navigation.navigate('ProfileScreen');
    }

    const signInPress = () => {
        //console.warn("Sign in");
        navigation.navigate('LearningPaths');
    }

    const forgotPasswordPress = () => {
        //console.warn("Forgot password");
        navigation.navigate('ForgotPassword');
    }

    const signInWithGoogle = () => {
        //console.warn("Sign in with Google");
    }

    const signInWithFacebook = () => {
        //console.warn("Sign in with Facebook");
    }

    const createAccount = () => {
        //console.warn("Sign up");
        navigation.navigate('SignUp');
    }

    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={generatedStyles.root} >
                <SafeAreaView style={[generatedStyles.bigView, {backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    
                    <AppLogo />
                    <CustomInput
                        placeholder="email"
                        value={email}
                        setValue={setEmail}
                        secureTextEntry={false}
                    />
                    <CustomInput
                        placeholder="password"
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
});

export default SignIn;
