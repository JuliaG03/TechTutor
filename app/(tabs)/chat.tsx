import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/Colors';

const Chat = () => {
  const colorScheme = useColorScheme();

  return (
    <View className="justify-center">
      <Text style={{color: Colors[colorScheme ?? 'light'].text}}>Chat</Text>
    </View>
  )
}

export default Chat