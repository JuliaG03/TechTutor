import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Notifications= () => {
    const colorScheme = useColorScheme();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            paddingHorizontal: 20,
            paddingTop: 20,
        },
        switchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: Colors[colorScheme ?? 'light'].tabTopColor,
        },
        text: {
            fontSize: 16,
            color: Colors[colorScheme ?? 'light'].textColor,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>Enable Notifications</Text>
                <Switch
                    trackColor={{ false: Colors[colorScheme ?? 'light'].gray, true: Colors[colorScheme ?? 'light'].purple }}
                    thumbColor={isEnabled ? Colors[colorScheme ?? 'light'].buttonBackground : Colors[colorScheme ?? 'light'].background}
                    ios_backgroundColor={Colors[colorScheme ?? 'light'].gray}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </SafeAreaView>
    );
};

export default Notifications;
