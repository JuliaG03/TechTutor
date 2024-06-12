import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar, Title, Caption } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { supabase } from '@/lib/supabase';
import {useAuth} from '@/providers/AuthProvider';


const ProfileScreen = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = useAuth();
    
    const isCurrentUser = userData?.id === route.params?.userId;
    const [profileData, setProfileData] = useState(null);

   
    const onEditPress = () => {
        navigation.navigate('EditProfileScreen');
    };
    //function to fetch the user profile data
    useEffect(() => {
        //if the user is the current user
        if (isCurrentUser) {//set the profile data to the user data
            setProfileData(userData);
        } else {
            fetchUserProfileData(route.params?.userId);
        }
    }, [route?.params.userId, userData]);
    //function to fetch the user profile data
    const fetchUserProfileData = async (userId) => {
        try {//fetch the user data from the database
            const { data, error } = await supabase.from('users').select('*').eq('id', userId).single();
            if (error) {
                throw error;
            }
            setProfileData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    //function to handle the settings button press
    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };
    //function to handle the support button press
    const onSupportPress = () => {
        navigation.navigate('Support');
    };

    //styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            paddingHorizontal: 20,
            paddingTop: 20,
        },
        userInfoSection: {
            marginBottom: 25,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            borderRadius: 5,
            padding: 20,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        infoBoxWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors[colorScheme ?? 'light'].tabTopColor,
            borderRadius: 8,
            padding: 10,
        },
        infoBox: {
            alignItems: 'center',
        },
        menuWrapper: {
            marginTop: 20,
        },
        menuItem: {
            marginBottom: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            borderRadius: 5,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        menuItemText: {
            color: Colors[colorScheme ?? 'light'].purple,
            fontSize: 14,
            marginLeft: 10,
        },
        icon: {
            color: Colors[colorScheme ?? 'light'].tabTopColor,
        },
        title: {
            color: Colors[colorScheme ?? 'light'].tint,
            fontWeight: '600',
            fontSize: 18,
        },
        caption: {
            color: Colors[colorScheme ?? 'light'].green,
            fontSize: 14,
        },
        text: {
            color: Colors[colorScheme ?? 'light'].green2,
            fontSize: 16,
        },
    });

    React.useLayoutEffect(() => {
        if (isCurrentUser) {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={onEditPress}>
                        <Icon name="pencil" size={25} style={{ marginRight: 20, color: '#2ebf91' }} />
                    </TouchableOpacity>
                ),
            });
        }
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Avatar.Image source={images.profile} />
                    <View style={{ marginLeft: 15 }}>
                        <Title style={styles.title}>{profileData?.firstname} {profileData?.lastname} </Title>
                        <Caption style={styles.caption}>@{profileData?.username}</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} style={styles.icon} />
                    <Text style={styles.text}>{profileData?.phone}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" size={20} style={styles.icon} />
                    <Text style={styles.text}> {profileData?.email}</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Title style={styles.title}>{profileData?.score}</Title>
                        <Caption style={styles.caption}>Score</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title style={styles.title}>{profileData?.lives}</Title>
                        <Caption style={styles.caption}>Lives</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={() => { }} style={styles.menuItem}>
                    <Icon name="share-variant" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={isCurrentUser ? styles.menuItem : { display: 'none' }}>
                    <Icon name="heart" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Request lives</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(onSupportPress)} style={isCurrentUser ? styles.menuItem : { display: 'none' }}>
                    <Icon name="account-check-outline" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSettingsPress} style={isCurrentUser ? styles.menuItem : { display: 'none' }}>
                    <Icon name="cog" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
