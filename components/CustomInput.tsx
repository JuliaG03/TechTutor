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
            width: 300,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            borderColor: '#22252A',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 3,
            paddingVertical: 5,
            marginTop: 19, 
            flexDirection: 'row',
            alignItems: 'center',
        },
        input: {
            flex: 1,
            marginLeft: 10,
            width: '100%',
            color: '#5BC8A3' || Colors[colorScheme ?? 'light'].textC,
        },
        icon: {
            marginRight: 10,
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
