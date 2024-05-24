import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const SignUpButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity onPress={handlePress} 
    activeOpacity={0.7}
    style={{ backgroundColor: Colors[colorScheme ?? 'light'].tint }} 
    className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}>
      <Text style={{ color: Colors[colorScheme ?? 'light'].background }} className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SignUpButton