import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import BackNavigationHeader from '@/components/BackNavigationHeader';
import { useAuth } from '@/providers/AuthProvider';

const Leaderboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView();
    const { userData } = useAuth();
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase.from('users').select('*').order('score', { ascending: false });
                if (error) {
                    throw error;
                }
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserPress = (userId: string) => {
        navigation.navigate('ProfileScreen', { userId });
    };

    const styles = StyleSheet.create({
        container: {
            borderColor: Colors[colorScheme ?? 'light'].green,
            borderWidth: 2,
            minHeight: 100,
            width: '90%',
            alignItems: 'center',
            margin: 15,
            borderRadius: 15,
            padding: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].background2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 10,
            textAlign: 'center',
        },
        userBox: {
            borderColor: Colors[colorScheme ?? 'light'].green,
            borderWidth: 2,
            margin: 10,
            width: '100%',
            borderRadius: 10,
            flexDirection: 'row',
            padding: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].tint,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 4,
        },
        currentBox: {
            borderWidth: 2,
            margin: 10,
            width: '100%',
            borderRadius: 10,
            flexDirection: 'row',
            padding: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].green2,
            borderColor: 'red',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        scoreBox: {
            flexDirection: 'row',
            marginLeft: 'auto',
            alignItems: 'center',
        },
        username: {
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors[colorScheme ?? 'light'].text,
        },
        score: {
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors[colorScheme ?? 'light'].text,
        },
        points: {
            fontSize: 16,
            color: Colors[colorScheme ?? 'light'].text,
        },
    });

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <BackNavigationHeader />
            <SafeAreaView style={generatedStyles.root}>
                <Text style={[generatedStyles.title, { color: Colors[colorScheme ?? 'light'].tint }]}>Leaderboard</Text>
                <View style={styles.container}>
                    {users.map((data) => (
                        <TouchableOpacity
                            key={data.id}
                            onPress={() => handleUserPress(data.id)}
                            style={userData?.id === data.id ? styles.currentBox : styles.userBox}
                        >
                            <Text style={styles.username}>@{data.username}</Text>
                            <View style={styles.scoreBox}>
                                <Text style={styles.score}>{data.score}</Text>
                                <Text style={styles.points}> points</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Leaderboard;
