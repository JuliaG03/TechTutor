import { View, Text } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const AuthLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Text style={{color: Colors[colorScheme ?? 'light'].tint}}>AuthLayout</Text>
    </View>
  )
}

export default AuthLayout