import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import AppLogo from '@/components/AppLogo';
import stylesView from '@/components/Styles';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmail = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const onConfirmPress = () => {
        console.warn("Sign Up");
    }

    const onSignInPress = () => {
        console.warn("Sign In");
        navigation.navigate("SignIn");
    }

    const onResendPress = () => {
        console.warn("Resend code");
    }

    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={generatedStyles.root}>
                <SafeAreaView style={[generatedStyles.bigView, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    <AppLogo />
                    <Text style={[generatedStyles.title,  {color: Colors[colorScheme ?? 'light'].tint}]}>Confirm your email</Text>
                    <CustomInput
                        placeholder="code received on email"
                        value={code}
                        setValue={setCode}
                        secureTextEntry={false}
                    />
                 
                    <CustomButton text="Confirm" onPress={onConfirmPress } type="primary" />

                    <CustomButton
                        text="Resend code"
                        onPress={onResendPress}
                        type="Secondary"
                    />
                    <CustomButton
                        text="Back to sign in"
                        onPress={onSignInPress}
                        type="Tertiary"
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
    );
};


export default ConfirmEmail;