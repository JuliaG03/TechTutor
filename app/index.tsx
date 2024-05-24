import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import React from 'react';

import { images } from '../constants'
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import SignUpButton from '@/components/SignUpButton';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    
    return (
        <SafeAreaView style={ {backgroundColor: Colors[colorScheme ?? 'light'].background} } className="h-full">
            <ScrollView contentContainerStyle={{ height: '100%'}}>
                <View className="w-full px-4 items-center justify-center min-h-[85vh]">
                    <Image
                        source={images.logo}
                        className="w-[370px] h-[250px]"
                        resizeMode="contain"
                        />

                    <View className='relative'>
                        <Text style={{color: Colors[colorScheme ?? 'light'].tint}} className="relative text-xl font-pregular">Join and start learning</Text>
                        <Text style={{color: Colors[colorScheme ?? 'light'].tint}} className="text-2xl font-pbold self-end left-12">TODAY!</Text>
                    </View>

                    <SignUpButton 
                        title="Continue with Email"
                        handlePress={() => {router.push('/learningpaths')}} // aici de modificat unde ne duce butonul (in sign-in pentru cand facem sign-in/log-in)
                        containerStyles="w-full mt-7"/>
                </View>
            </ScrollView>  

            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    );
}