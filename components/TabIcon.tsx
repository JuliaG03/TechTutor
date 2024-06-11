import { View, Image, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export const TabIcon = ({ icon, color, name, focused }) => {
    const colorScheme = useColorScheme();
    //returning the view
    return (
        <View className='items-center justify-center gap-2 mt-4'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text style={{ fontSize: 9, color: focused ? Colors[colorScheme ?? 'light'].tint : Colors[colorScheme ?? 'light'].text }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}