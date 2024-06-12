import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from "react-native";
import { useAuth } from '@/providers/AuthProvider';
import { Colors } from "@/constants/Colors";
import BackNavigationHeader from '@/components/BackNavigationHeader';

import CustomButton from '@/components/CustomButton';
const LessonContent = ({ route }) => {
    const { idLearningPath, idLesson } = route.params;
    const colorScheme = useColorScheme();
    const navigation = useNavigation(); // Initialize useNavigation hook
    const { userData, loading, lessons } = useAuth();
    const [lessonContent, setLessonContent] = useState(null);

    const currentLesson = lessons?.find(lesson => lesson.idlearningpath === idLearningPath && lesson.idlesson === idLesson);
    if (!currentLesson) return null;


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            minHeight: 900
        },

        lessonTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            
            alignSelf: 'center',
        },
        lessonContentContainer: {
            margin: 20,
            padding: 10,
            borderWidth: 3,
            borderColor: Colors[colorScheme ?? 'light'].green,
            backgroundColor: Colors[colorScheme ?? 'light'].purple,
            borderRadius: 8,
           
        },
        lessonContent: {
            padding: 10,
           
            // backgroundColor: Colors.light.tabBackground, // Set background color here to maintain previous setting
        },
        lessonText: {
            fontSize: 16,
            color: 'white'
        },
    });

    const toQuestions = () => {
        navigation.navigate('exercisePage', { idLearningPath, idLesson });
    }

    return (
        <ScrollView >
            <BackNavigationHeader/>
            <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].tabBackground }]}>
                <View>
                    <Text style={[styles.lessonTitle, { color: Colors[colorScheme ?? "light"].purple }]}>{currentLesson.name}</Text>
                    <View style={styles.lessonContentContainer}>
                        <View style={styles.lessonContent}>
                            <Text style={styles.lessonText}>{currentLesson.content}</Text>
                        </View>
                    </View>
                </View>
                <CustomButton text="Let's test your knowledge" onPress={toQuestions} type="primary" buttonWidth={ 300} border />
            </SafeAreaView>
            
        </ScrollView>
    );
}


export default LessonContent;
