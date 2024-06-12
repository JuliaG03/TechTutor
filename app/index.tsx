
import { StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';4
import { useNavigation } from '@react-navigation/native';
import AppStack from '@/components/navigation/AppStack';

export default function HomeScreen() {

    
    const navigation = useNavigation();
   
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation])

    return (
        <>
        <StatusBar hidden={true} />
        <AppStack />
      </>
    );
}

