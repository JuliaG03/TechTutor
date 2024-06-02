import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import stylesView from '@/components/Styles'
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import  images  from '../../constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const generatedStyles = stylesView(); 

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
        justifyContent: 'flex-start',
        //backgroundColor: '#E6E6FA',
        backgroundColor: Colors[colorScheme ?? 'light'].background
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    caption: {
        fontSize: 13,
        color: Colors[colorScheme ?? 'light'].green,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper: {
        flexDirection: 'row',
        height: 100,
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors[colorScheme ?? 'light'].tabTopColor
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    menuWrapper: {
        marginTop: 10,
        marginLeft: 30
    }, 
    menuItem: {
        flexDirection: 'row',
    },
    menuItemText: {
        color: Colors[colorScheme ?? 'light'].tabIconDefault,
        fontWeight: '500'
    },
    title: {
        color: Colors[colorScheme ?? 'light'].tint,
        fontWeight: '600',
    },
    text: {
        fontSize: 15,
        color: Colors[colorScheme ?? 'light'].green2,
    }
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onEditPress}>
          <Icon name="pencil" size={25}style={[generatedStyles.icon, {marginRight: 20}]} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView  style={{ ...styles.container}}>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
            <Avatar.Image source = {images.profile} />
            <View style={{marginLeft: 15}}>
                <Title style={styles.title}> Maria Popescu </Title>
                <Caption style={styles.caption}>@maria_p</Caption>
            </View>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
            <Icon name="phone" size={20} style={generatedStyles.icon}/>
            <Text style={[styles.text, {marginLeft: 10}]}> +40 07234443</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
            <Icon name="email" size={20} style={generatedStyles.icon}/>
            <Text style={[styles.text, {marginLeft: 10}]}> MariaPopescu@gmail.com</Text>
        </View>
        
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {borderRightColor: Colors[colorScheme ?? 'light'].tabTopColor, borderWidth: 1}]}>
                <Title style={[styles.title, { fontSize: 16 }]}>12000</Title>
                <Caption style={styles.caption}>Score</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title style={[styles.title, { fontSize: 16 }]}>5</Title>
                <Caption style={styles.caption}>Lives</Caption>
            </View>
        </View>

      </View>
      
      <View style={styles.menuWrapper}>
        <CustomButton
            text="Share"
            onPress={() => {}}
            type="Tertiary"
            icon="share-variant" 
        />
        <CustomButton
            text="Request lives"
            onPress={() => {}}
            type="Tertiary"
            icon="heart" 
        />
        <CustomButton
            text="Support"
            onPress={() => {}}
            type="Tertiary"
            icon="account-check-outline" 
        />
        <CustomButton
            text="Settings"
            onPress={onSettingsPress}
            type="Tertiary"
            icon="cog" 
        />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;
