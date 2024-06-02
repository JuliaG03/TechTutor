
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import React, { useLayoutEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '@/components/navigation/AppStack';

export default function HomeScreen() {

    return (
           <AppStack />
    );
}

