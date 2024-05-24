import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { icons } from '@/constants';

const Header = ({ selectedLanguage, hearts }) => {
   const colorScheme = useColorScheme();
   return (
    <SafeAreaView>
    <View className={"h-[60px] px-15 flex-row items-center justify-between"} style={{ backgroundColor: Colors[colorScheme ?? 'light'].tabBackground }}>
        <View className={"flex-row items-center"}>
            <Text className={"font-pbold text-lg mr-3 ml-2"} style={{ color: Colors[colorScheme ?? 'light'].text}}>{selectedLanguage}</Text>
            <View className={"flex-row items-center"}>
            <Image 
                source={icons.heart} 
                className={"w-5 h-5 mr-1"}/>
            <Text className={"font-pregular text-base"} style={{ color: Colors[colorScheme ?? 'light'].text }}>{hearts}</Text>
            </View>
        </View>
    </View>
    </SafeAreaView>
    
  );
}

export default Header