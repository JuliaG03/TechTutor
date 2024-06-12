import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Animated, Easing } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useAuth } from '@/providers/AuthProvider';
import stylesView from '@/components/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import BackNavigationHeader from '@/components/BackNavigationHeader';

export default function LearningPaths() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const { userData, loading, learningPaths,  } = useAuth();
    const generatedStyles = stylesView();
    const [shakeAnimation] = useState(new Animated.Value(0));
    const [shakeId, setShakeId] = useState(null);

    useEffect(() => {
        if (!loading) {
            shakeAnimation.setValue(0);
        }
    }, [loading]);

    const startShakeAnimation = (index, learningPathId) => {
        setShakeId(index);
        shakeAnimation.setValue(0); // Resetează animația
    
        // Definește animația pentru shake
        Animated.sequence([
            Animated.timing(shakeAnimation, {
                toValue: 5,
                duration: 50,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnimation, {
                toValue: -5,
                duration: 50,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnimation, {
                toValue: 0,
                duration: 50,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Execută navigarea aici, după ce animația s-a încheiat
            navigation.navigate('LearningPaths', { learningPathId });
        });
    };
    



    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        scrollViewContent: {
            paddingTop: 5,
            paddingBottom: 5,
            gap: 10,
        },
        learningPathItem: {
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
        },
        learningPathText: {
            color: Colors[colorScheme ?? "light"].text,
            fontSize: 18,
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].tabBackground }]}>
            <BackNavigationHeader/>
            <Text style={[generatedStyles.title, { color: Colors[colorScheme ?? 'light'].tint }]}>What do you want to learn today?</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                {learningPaths && learningPaths.length > 0 ? (
                    learningPaths.map((learningPath, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                startShakeAnimation(index, learningPath.idlearningpath)
                            }}
                        >
                            <LinearGradient
                                colors={['#BDB2FF', '#A68BFC', '#9457EB', '#6100A7']} 
                                style={styles.learningPathItem}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                {shakeId === index ?
                                    <Animated.Text style={[styles.learningPathText, { transform: [{ translateX: shakeAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 10] }) }] }]}>
                                        {learningPath.name}
                                    </Animated.Text> :
                                    <Text style={[styles.learningPathText]}>{learningPath.name}</Text>
                                }
                            </LinearGradient>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>No learning paths found.</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

