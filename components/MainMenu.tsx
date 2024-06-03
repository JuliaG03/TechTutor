import { Alert, View, Text, StyleSheet, Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
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
    const { session } = useAuth();
    //console.log(session);
    // if (!session) {
    //   return <
    // }
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const profileOnPress = () => {
        navigation.navigate('ProfileScreen');
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
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView();
    return (
        <SafeAreaView style={generatedStyles.root}>
            <Text style={[generatedStyles.title, { color: Colors[colorScheme ?? 'light'].icon }]}>Menu</Text>
            <Text style={[generatedStyles.subTitle, { color: Colors[colorScheme ?? 'light'].icon }]}>Please select an option</Text>
            <CustomButton text={"Profile"} onPress={profileOnPress} type="primary" />
            <CustomButton text={"Settings"} onPress={settingsOnPress} type="primary" />
            <CustomButton text={"Learning Paths"} onPress={learningPathsOnPress} type="primary" />
            <CustomButton text={"Edit Profile"} onPress={editProfileOnPress} type="primary" />
            <CustomButton text={"See Leaderboard"} onPress={leaderboardOnPress} type="primary" />
        </SafeAreaView>    
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
});

export default MainMenu;
