import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Caption } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { supabase } from '@/lib/supabase';
//main component function
const Settings = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    //  styles
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
    //settings options
    const settingsOptions = [
        { name: 'Edit Profile', icon: 'account-edit', screen: 'EditProfileScreen' },
        { name: 'Support', icon: 'account-check-outline', screen: 'Support' },
        { name: 'Notifications', icon: 'bell', screen: 'Notifications' },
        { name: 'Privacy', icon: 'lock-outline', screen: 'Privacy' },
        { name: 'About', icon: 'information', screen: 'About' },
        { name: 'Logout', icon: 'logout', screen: 'Logout'}
    ];

    //function to handle the menu press
    const handleMenuPress = (screen) => {
        if (screen === 'Logout') {
            supabase.auth.signOut();
        } else {
            navigation.navigate(screen);
        }
    };
    //return statement
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <Title style={styles.title}>Maria Popescu</Title>
                <Caption style={styles.caption}>@maria_p</Caption>
            </View>
            <View style={styles.menuWrapper}>
                {settingsOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => handleMenuPress(option.screen)}
                    >
                        <Text style={styles.menuItemText}>{option.name}</Text>
                        <Icon name={option.icon} size={27} color={Colors[colorScheme ?? 'light'].tabTopColor} />
                    </TouchableOpacity>
                ))}
            </V>
        </SafeAreaView>
    );
};

export default Settings;
