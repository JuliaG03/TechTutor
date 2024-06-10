import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import BackNavigationHeader from '@/components/BackNavigationHeader';
import { useAuth } from '@/providers/AuthProvider'; 
//main component function
const Leaderboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const colorScheme = useColorScheme();
    const generatedStyles = stylesView();
    const { userData } = useAuth();
    const navigation = useNavigation();

    //function to fetch the users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase.from('users').select('*').order('score', { ascending: true });
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
    //styles
    const styles = StyleSheet.create({
        container: {
            borderColor: Colors[colorScheme ?? 'light'].green,
            borderWidth: 4,
            minHeight: 100,
            width: 360,
            alignItems: 'center',
            margin: 15,
            borderRadius: 15,
            paddingTop: 10,
            paddingBottom: 10,
        },
        title: {
            position: 'absolute',

            paddingVertical: 10,
        },
        userBox: {
            borderColor: Colors[colorScheme ?? 'light'].green,
            borderWidth: 3,
            margin: 10,
            width: '80%',
            borderStyle: 'dotted',
            flexDirection: 'row',
            padding: 2,
            backgroundColor: Colors[colorScheme ?? 'light'].tint,

        },
        currentBox: {
            borderWidth: 3,
            margin: 10,
            width: '80%',
            borderStyle: 'dotted',
            flexDirection: 'row',
            padding: 2,
            backgroundColor: Colors[colorScheme ?? 'light'].green2,
            borderColor: 'red'
        },
        scoreBox: {
            flexDirection: 'row',
            marginLeft: '55%'
        }

    });
    //function to handle the user press
    const handleUserPress = (userId: string) => {
        navigation.navigate('ProfileScreen', { userId }); 
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <BackNavigationHeader />
            <SafeAreaView style={generatedStyles.root} >
                <Text style={[generatedStyles.title, { color: Colors[colorScheme ?? 'light'].tint }]}>Leaderboard</Text>
                <View style={styles.container}>
                    {users.map((data, index) => (
                        <TouchableOpacity
                            key={data.id}
                            onPress={() => handleUserPress(data.id)}
                            style={userData?.id === data.id ? styles.currentBox : styles.userBox}
                        >
                            <Text>@</Text>
                            <Text key={index} style={generatedStyles.subtitle}>{data.username}</Text>
                            <View style={styles.scoreBox}>
                                <Text key={index} style={generatedStyles.subtitle}>{data.score}</Text>
                                <Text> points</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Leaderboard;