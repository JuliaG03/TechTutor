import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesView from '@/components/Styles';

const CustomButton = ({ text, onPress, type = "Primary", bgColor, fontColor, icon, buttonWidth = 250, disabled }) => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            width: buttonWidth,
            paddingVertical: 12,
            paddingHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
        },
        containerPrimary: {
            borderWidth: 0,
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,

        },
        containerSecondary: {
            borderWidth: 0,
            backgroundColor: Colors[colorScheme ?? 'light'].borderButton,

        },
        containerTertiary: {},
        text: {
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors[colorScheme ?? 'light'].textC,
        },
        textTertiary: {
            color: '#78909C',
        },
        textSecondary: {
            color: Colors[colorScheme ?? 'light'].purple,
        },
        icon: {
            marginRight: 10,
            color: Colors[colorScheme ?? 'light'].textC,
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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {icon && <Icon name={icon} size={20} style={[styles.icon, generatedStyles.icon]} />}
                <Text
                    style={[
                        textStyle,
                        fontColor ? { color: fontColor } : {},
                    ]}
                >
                    {text}
                </Text>
            </View>
        </Pressable>
    );
};

export default CustomButton;
