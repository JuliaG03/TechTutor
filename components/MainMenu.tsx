import { Alert, ActivityIndicator, View, Text, StyleSheet, Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import stylesView from '@/components/Styles';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';
import AppLogo from '@/components/AppLogo';

const MainMenu = () => {
    const navigation = useNavigation();
    const { session, loading, userData } = useAuth();
    //console.log(session);
    if (loading) {
        return <ActivityIndicator/>
    }
    if (!session) {
        navigation.navigate('SignIn');
    }

    const profileOnPress = () => {
        navigation.navigate('ProfileScreen', {userId: userData?.id});
    }

    const settingsOnPress= () => {
        navigation.navigate('Settings');
    }

    const learningPathsOnPress = () => {
        navigation.navigate('LearningPaths');
    }

    const editProfileOnPress = () => {
        navigation.navigate('EditProfileScreen');
    }

    const leaderboardOnPress = () => {
        navigation.navigate('LeaderBoard');
    }

    const signOutOnPress = () => {
        supabase.auth.signOut();
        navigation.navigate('SignIn');
    }

    const colorScheme = useColorScheme();
    const generatedStyles = stylesView();
    return (
        <SafeAreaView style={generatedStyles.root}>
            <Text style={[generatedStyles.title, { color: Colors[colorScheme ?? 'light'].icon }]}>Menu</Text>
            <Text style={[generatedStyles.subtitle, { color: Colors[colorScheme ?? 'light'].icon }]}>Please select an option</Text>
            <CustomButton icon="account" text={"Profile"} onPress={profileOnPress} type="primary" />
            <CustomButton icon="cog" text={"Settings"} onPress={settingsOnPress} type="primary" />
            <CustomButton icon="book-open" text={"Learning Paths"} onPress={learningPathsOnPress} type="primary" />
            <CustomButton icon="account-edit" text={"Edit Profile"} onPress={editProfileOnPress} type="primary" />
            <CustomButton icon="trophy" text={"See Leaderboard"} onPress={leaderboardOnPress} type="primary" />
            <CustomButton icon="logout" text={"Sign out"} onPress={signOutOnPress} type="tertiary" />
        </SafeAreaView>    
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
});

export default MainMenu;
