import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings= () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[colorScheme ?? 'light'].background
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
        marginBottom: 10
    },
    infoBoxWrapper: {
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuWrapper: {
        marginTop: 10
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
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View>
            <Title style={styles.title}> Maria Popescu </Title>
            <Caption style={styles.caption}>@maria_p</Caption>
            
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings;
