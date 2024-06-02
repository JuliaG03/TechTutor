
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import {ThemedText} from '../../components/ThemedText';
import AppLogo from '@/components/AppLogo';
import stylesView from '@/components/Styles';
import { useNavigation } from '@react-navigation/native';
import SocialSignInButtons from '@/components/SocialSignInButtons';
import {supabase} from '@/lib/supabase';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
       setLoading(true);
       const {error} = await supabase.auth.signUp({ phone, email, password});
       if (error) Alert.alert(error.message);
       setLoading(false);
    }
    const signUpPress = () => {
        console.warn("Sign Up");
    }

    const SignIn = () => {
        console.warn("Sign in");
        navigation.navigate('SignIn');
    }

    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 

    const styles = StyleSheet.create({

        text: {
            color: 'white',
        },
    
        thermsAndPolicy: {
            color: Colors[colorScheme ?? 'light'].green,
            marginHorizontal: 25
        }
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={generatedStyles.root}>
                <SafeAreaView style={[generatedStyles.bigView, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    <AppLogo/>
                    <Text style={[generatedStyles.title,  {color: Colors[colorScheme ?? 'light'].tint}]}>Create an account</Text>
                    <CustomInput
                        placeholder="username"
                        value={username}
                        setValue={setUsername}
                        secureTextEntry={false}
                    />
                    <CustomInput
                        placeholder="E-mail"
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
                    <CustomInput
                        placeholder="confirm password"
                        value={repeatPassword}
                        setValue={setRepeatPassword}
                        secureTextEntry={true}
                    />
                      <CustomInput
                        placeholder="phone number"
                        value={phone}
                        setValue={setPhone}
                        secureTextEntry={false}
                        keyboardType='number-pad'
                    />
                    <CustomButton disabled={loading} text={loading ? "Creating account...":"Create account"} onPress={signUpWithEmail} type="primary" />

                    <Text style={styles.thermsAndPolicy}>
                        By registering, you confirm that you accept our<ThemedText type="link"> therms of use </ThemedText> and <Text>privacy policy</Text>.
                    </Text>
                    <SocialSignInButtons/>
                    <CustomButton
                        text="Sign in with your account"
                        onPress={SignIn}
                        type="Tertiary"
                    />
                 </SafeAreaView>
            </View>
        </ScrollView>
    );
};



export default SignUp;