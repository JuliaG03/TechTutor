import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar, Title, Caption } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    const onEditPress = () => {
        navigation.navigate('EditProfileScreen');
    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

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
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onEditPress}>
                    <Icon name="pencil" size={25} style={{ marginRight: 20, color: '#2ebf91' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Avatar.Image source={images.profile} />
                    <View style={{ marginLeft: 15 }}>
                        <Title style={styles.title}>Maria Popescu</Title>
                        <Caption style={styles.caption}>@maria_p</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} style={styles.icon} />
                    <Text style={styles.text}>+40 07234443</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" size={20} style={styles.icon} />
                    <Text style={styles.text}>MariaPopescu@gmail.com</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Title style={styles.title}>12000</Title>
                        <Caption style={styles.caption}>Score</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title style={styles.title}>5</Title>
                        <Caption style={styles.caption}>Lives</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={() => { }} style={styles.menuItem}>
                    <Icon name="share-variant" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.menuItem}>
                    <Icon name="heart" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Request lives</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.menuItem}>
                    <Icon name="account-check-outline" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSettingsPress} style={styles.menuItem}>
                    <Icon name="cog" size={20} style={styles.icon} />
                    <Text style={styles.menuItemText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
