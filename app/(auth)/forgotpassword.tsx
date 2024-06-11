import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import AppLogo from '@/components/AppLogo';
import stylesView from '@/components/Styles';
import { useNavigation } from '@react-navigation/native';

//main component function
const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    //function to handle the sign in button press
    const onSignInPress = () => {
      //console.warn("Sign In");
      navigation.navigate("SignIn");
    }
    //function to handle the send button press
    const onSendPress = () => {
       // console.warn("code");
      navigation.navigate("ResetPassword");
    }
    //function to handle the resend button press
    const onResendPress = () => {
      console.warn("Resend code)");
    }
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 
    //returning the view
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={generatedStyles.root}>
                <SafeAreaView style={[generatedStyles.bigView, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    <AppLogo />
                    <Text style={[generatedStyles.title,  {color: Colors[colorScheme ?? 'light'].tint}]}>Reset your password</Text>
                    <CustomInput
                        placeholder="code received on email"
                        value={username}
                        setValue={setUsername}
                        secureTextEntry={false}
                    />
                 
                    <CustomButton text="Send" onPress={onSendPress } type="primary" />

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


export default ForgotPassword;
