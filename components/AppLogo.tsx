import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import  images  from '../constants/images';

const AppLogo = () => {
    const colorScheme = useColorScheme();
    return (
        <View>
            <Image
                source={images.logo}
                style={{ width: 370, height: 250, marginTop: 20 }}
                resizeMode="contain"
            />

            <View style={{ position: 'relative' }}>
                <Text style={{ color: Colors[colorScheme ?? 'light'].tint, fontSize: 18, fontFamily: 'PRegular', left: '24%' }}>Join and start learning</Text>
                <Text style={{ color: Colors[colorScheme ?? 'light'].tint, fontSize: 24, fontFamily: 'PBold', alignSelf: 'flex-end', right: '25%' }}>TODAY!</Text>
            </View>
        </View>
    );
};

export default AppLogo;
