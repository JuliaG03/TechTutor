import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Animated, StyleSheet, Image, TextInput, ImageBackground, Platform, Modal, PanResponder } from 'react-native'
import React, { useRef, useLayoutEffect } from 'react';
import CustomInput from '@/components/CustomInput';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const Settings = () => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        userInfoSection: {
            paddingHorizontal: 30,
            marginBottom: 25,
        },
        caption: {
            fontSize: 14,
            color: Colors[colorScheme ?? 'light'].green,
        },
        row: {
            flexDirection: 'row',
            marginBottom: 10,
        },
        infoBoxWrapper: {
            flexDirection: 'row',
            height: 100,
        },
        infoBox: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        menuWrapper: {
            marginTop: 10,
            paddingHorizontal: 20,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors[colorScheme ?? 'light'].tabTopColor,
        },
        menuItemText: {
            color: Colors[colorScheme ?? 'light'].purple,
            fontWeight: '500',
            fontSize: 17,
        },
        title: {
            color: Colors[colorScheme ?? 'light'].textColor,
            fontWeight: '600',
            fontSize: 25,
            marginBottom: 10,
        },

    });

    const settingsOptions = [
        { name: 'Edit Profile', icon: 'account-edit' },
        { name: 'Change Password', icon: 'lock' },
        { name: 'Notifications', icon: 'bell' },
        { name: 'Privacy', icon: 'lock-outline' },
        { name: 'About', icon: 'information' },
        { name: 'Logout', icon: 'logout' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <Title style={styles.title}>Maria Popescu</Title>
                <Caption style={styles.caption}>@maria_p</Caption>
            </View>
            <View style={styles.menuWrapper}>
                {settingsOptions.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <Text style={styles.menuItemText}>{option.name}</Text>
                        <Icon name={option.icon} size={27} color={Colors[colorScheme ?? 'light'].tabTopColor} />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Settings;
