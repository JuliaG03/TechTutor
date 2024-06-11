import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CourseDetailsBar from "@/components/CourseDetailsBar";
import courseData from "@/data/courseData.json";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useAuth } from '@/providers/AuthProvider';

const CIRCLE_RADIUS = 48;
export default function LearningPaths({ route }) {
  const { learningPathId } = route.params;
  const colorScheme = useColorScheme();
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [courseId, setCourseId] = useState(0); // Default to the first course
  const [sectionId, setSectionId] = useState(0); // Default to the first section
  const [lessonId, setLessonId] = useState(0); // Default to the first lesson
  const { userData, loading, learningPaths, lessons, completedLessons } = useAuth();

  const language = courseData.language[courseId]; // Get the selected language/course
  if (!language) return null;

  const currentSection = language.sections[sectionId];
  if (!currentSection) return null;

  useEffect(() => {
    console.log("User Data: ", userData);
  }, [userData]);


  const getLearningPath = (id) => {
    const learningPath = learningPaths?.find(path => path.idlearningpath === id);
    return learningPath;
  };


  return (
    <ScrollView>
      <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].tabBackground }]}>
        <CourseDetailsBar courseName={getLearningPath(learningPathId)?.name} courseImg={`@/assets/icons/${language.img}`} />
        <View style={styles.lessonsContainer}>
        {lessons && lessons.length > 0 && lessons.map((lesson) => {
            
            const isLessonInPath = lesson.idlearningpath === learningPathId;
            if (!isLessonInPath) return null;
            const index = lesson.idlesson; 
           
            return (
              <TouchableOpacity key={index} style={styles.lessonContainer}>
                <LinearGradient
                  colors={ [Colors[colorScheme ?? 'light'].purple, Colors[colorScheme ?? 'light'].purple]  }
                  style={styles.gradient}
                > 
                  
                  <View style={[styles.circle, { width: CIRCLE_RADIUS, height: CIRCLE_RADIUS, backgroundColor: (completedLessons?.some(pair => pair.idlesson === lesson.idlesson && pair.idlearningpath === lesson.idlearningpath)) ?  Colors.light.tint : "gray" }]}>
                    <Text style={styles.circleText}>{index}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={[styles.lessonName, { color: Colors[colorScheme ?? "light"].text }]}>
                      {lesson.name}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lessonsContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  lessonContainer: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CIRCLE_RADIUS / 2,
    marginRight: 15,
  },
  circleText: {
    color: Colors.light.text,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
  },
  lessonName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    zIndex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
