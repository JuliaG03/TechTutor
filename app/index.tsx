import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    
    return (
        <View className="flex-1 items-center justify-center">
        <View className="">
            <Image
            source={require('@/assets/images/icon.png')}
            style={{width: 300, height: 200}}
            />
        </View>
        <View >
            <Text style={{color: Colors[colorScheme ?? 'light'].tint}} className="text-xl font-pregular">Join and start learning</Text>
            <Text style={{color: Colors[colorScheme ?? 'light'].tint}} className="text-2xl font-pbold self-end left-10">TODAY!</Text>
        </View>
        <Link href="/chat" style={{color: Colors[colorScheme ?? 'light'].tint}} className='text-l'>Go to Home</Link>

        </View>
    );
}