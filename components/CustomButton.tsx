import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesView from '@/components/Styles'

const CustomButton = ({ text, onPress, type = "Primary", bgColor, fontColor, icon, buttonWidth=250, disabled }) => {
    const colorScheme = useColorScheme();

    const lightPurple = '#8E44AD';
    const darkPurple = '#5E3370';

    const styles = StyleSheet.create({
        container: {
            width: buttonWidth,
            padding: 10,
            marginVertical: 5,
            //alignItems: 'center',
            borderRadius: 6,
        },
        containerPrimary: {
            borderWidth: 1.5,
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
            borderBottomColor: Colors[colorScheme ?? 'light'].borderButton,
            borderRightColor: Colors[colorScheme ?? 'light'].borderButton
        },
        containerSecondary: {
            borderWidth: 1.5,
            backgroundColor: Colors[colorScheme ?? 'light'].borderButton,
            borderBottomColor: Colors[colorScheme ?? 'light'].buttonBackground,
            borderRightColor: Colors[colorScheme ?? 'light'].buttonBackground
        },
        containerTertiary: {
          
        },
        text: {
            alignContent: 'center',
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors[colorScheme ?? 'light'].textC,
        },
        textTertiary: {
            color: '#78909C',
        },
        textSecondary: {
            color: Colors[colorScheme ?? 'light'].purple
        }
    });

    let containerStyle = styles.container;
    let textStyle = styles.text;

    switch (type.toLowerCase()) {
        case 'primary':
            containerStyle = { ...containerStyle, ...styles.containerPrimary };
            break;
        case 'secondary':
            containerStyle = { ...containerStyle, ...styles.containerSecondary };
            textStyle = { ...textStyle, ...styles.textSecondary };
            break;
        case 'tertiary':
            textStyle = { ...textStyle, ...styles.textTertiary };
            break;
    }

    const generatedStyles = stylesView(); 
    return (
        <Pressable
        disabled={disabled}
            onPress={onPress}
            style={[
                containerStyle,
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {icon && <Icon name={icon} size={20} style={[generatedStyles.icon, {marginLeft: 0}]} />}
                <View style={{alignItems:'center'}}>   
                    <Text
                        style={[
                            textStyle,
                            fontColor ? { color: fontColor } : {},
                            {marginLeft: 20}
                        ]}
                    >
                        {text}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default CustomButton;
