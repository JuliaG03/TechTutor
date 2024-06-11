import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from "react-native";
import { useAuth } from '@/providers/AuthProvider';
import { Colors } from "@/constants/Colors";

const LessonContent = ({ route }) => {
  const { idLearningPath, idLesson } = route.params;
  const colorScheme = useColorScheme();
  const navigation = useNavigation(); // Initialize useNavigation hook
  const { userData, loading, lessons } = useAuth();
  const [lessonContent, setLessonContent] = useState(null);

  const currentLesson = lessons?.find(lesson => lesson.idlearningpath === idLearningPath && lesson.idlesson === idLesson);
  if (!currentLesson) return null;

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].tabBackground }]}>
      <View style={styles.lessonHeader}>
        <Text style={[styles.lessonTitle, { color: Colors[colorScheme ?? "light"].purple }]}>{currentLesson.name}</Text>
      </View>
      <View style={styles.lessonContentContainer}>
        <View style={styles.lessonContent}>
          <Text style={styles.lessonText}>{currentLesson.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lessonHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent', // Remove border color
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lessonContentContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'transparent', // No background color for the container
    borderWidth: 2,
    borderColor: 'green', // Green border color
    borderRadius: 8,
  },
  lessonContent: {
    padding: 10,
  },
  lessonText: {
    fontSize: 16,
  },
});

export default LessonContent;
