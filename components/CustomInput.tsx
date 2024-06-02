import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import stylesView from './Styles';
import { Icon } from 'react-native-paper';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, icon, keyboardType ="default" }) => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            width: 240,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            borderColor: '#22252A',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 5, 
            flexDirection: 'row'
        },
        input: {
            width: '100%',
        }
    });

    const generatedStyles = stylesView(); 
    return (
        <View style={styles.container}>
            {icon && <Icon source={icon} size={25} color={generatedStyles.icon.color}  />}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor={Colors[colorScheme ?? 'light'].textC}
                style={[styles.input, {marginLeft:15}]}
                secureTextEntry={secureTextEntry} 
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default CustomInput;
