import { View, Text } from 'react-native'
import React from 'react'
import {useAuth} from '@/providers/AuthProvider';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

//main component function
const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const {session} = useAuth();
  const navigation = useNavigation();
  if (session) {
    navigation.navigate("learningMain");
  }
  return (
    <View>
      <Text style={{color: Colors[colorScheme ?? 'light'].tint}}>AuthLayout</Text>
    </View>
  )
}

export default AuthLayout