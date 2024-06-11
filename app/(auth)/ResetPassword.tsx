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
const ResetPassword = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    //function to handle the sign in button press
    const onSignInPress = () => {
      //console.warn("Sign In");
      navigation.navigate("SignIn");
    }
    //function to handle the submit button press
    const onSubmitPress = () => {
      console.warn("Submit");
    }
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView(); 
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={generatedStyles.root}>
                <SafeAreaView style={[generatedStyles.bigView, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                    <AppLogo />
                    <Text style={[generatedStyles.title,  {color: Colors[colorScheme ?? 'light'].tint}]}>Reset your password</Text>
                    <CustomInput
                        placeholder="Code"
                        value={code}
                        setValue={setCode}
                        secureTextEntry={false}
                    />
                    <CustomInput
                        placeholder="new password"
                        value={newPassword}
                        setValue={setNewPassword}
                        secureTextEntry={false}
                    />
                    <CustomButton text="Submit" onPress={onSubmitPress } type="primary" />

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


export default ResetPassword;