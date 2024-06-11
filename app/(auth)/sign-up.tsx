
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
//main component function
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [phone, setPhone] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [loading, setLoading] = useState(false);
    //function to handle the sign up button press
    async function signUpWithEmail() {
        if (password !== repeatPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        // Check if all fields are filled
        if (!email || !password || !username || !lastname || !firstname || !phone) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        setLoading(true);
        // Sign up with email and password
        const { data, error } = await supabase.auth.signUp({ phone, email, password });
        // Check for errors
        if (error) {
            console.error('Error signing up:', error.message);
            Alert.alert('Error signing up:', error.message);
            setLoading(false);
            return;
        }
        const user = data?.user;
        // Insert user data into the database
        await supabase.from('users').insert({
            id: user?.id,
            email: user?.email,
            phone: phone,
            username: username,
            lastname: lastname,
            firstname: firstname,
            score: 0
        });
        // Send email confirmation
        Alert.alert('Account created. Now please sign in!');
        setLoading(false);
        navigation.navigate('SignIn');
    }

    //function to handle the sign in button press
    const signUpPress = () => {
        console.warn("Sign Up");
    }
    //function to handle the sign in button press
    const SignIn = () => {
        console.warn("Sign in");
        navigation.navigate('SignIn');
    }
    //color scheme
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
                    <Text style={[generatedStyles.title,  {color: Colors[colorScheme ?? 'light'].tint, marginTop: 20}]}>Create an account</Text>
                    <CustomInput
                        placeholder="username"
                        value={username}
                        setValue={setUsername}
                        secureTextEntry={false}
                    />
                    <CustomInput
                        placeholder="lastname"
                        value={lastname}
                        setValue={setLastname}
                        secureTextEntry={false}
                    />
                     <CustomInput
                        placeholder="firstname"
                        value={firstname}
                        setValue={setFirstname}
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
                        By registering, you confirm that you accept our<ThemedText type="link"> terms of use </ThemedText> and <Text>privacy policy</Text>.
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