import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Animated, StyleSheet, Image, TextInput, ImageBackground, Platform, Modal, PanResponder } from 'react-native'
import React, { useRef, useLayoutEffect } from 'react';
import CustomInput from '@/components/CustomInput';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const BackNavigationHeader = ({ destination = "ProfileScreen" }) => {
    console.log("Destination:", destination);
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView();

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack();
    };

    const styles = StyleSheet.create({
        text: {
            fontSize: 15,
            color: Colors[colorScheme ?? 'light'].green2,
        },
    });

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={onBackPress} style={{ marginLeft: 20 }}>
                        <Icon name="arrow-left" size={25} style={[generatedStyles.icon, { marginRight: 5 }]} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Back</Text>
                </View>
            ),
        });
    }, [navigation]);

    return null;
};

export default BackNavigationHeader;