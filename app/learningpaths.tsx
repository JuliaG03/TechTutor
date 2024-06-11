import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CourseDetailsBar from "@/components/CourseDetailsBar";
import LessonItem from "@/components/LessonItem";
import courseData from "@/data/courseData.json";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useAuth } from '@/providers/AuthProvider';

const CIRCLE_RADIUS = 48;

export default function LearningPaths({route}) {
  const { learningPathId } = route.params;
  const colorScheme = useColorScheme();
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [courseId, setCourseId] = useState(0); // Default to the first course
  const [sectionId, setSectionId] = useState(0); // Default to the first section
  const [lessonId, setLessonId] = useState(0); // Default to the first lesson
  const { userData, loading, learningPaths, lessons } = useAuth(); 

  const language = courseData.language[courseId]; // Get the selected language/course
  if (!language) return null;

  const currentSection = language.sections[sectionId];
  if (!currentSection) return null;

  useEffect(() => {
    console.log("User Data: ", userData);
  }, [userData]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const getFirstLessonName = (sectionIndex) => { // functie de testare
    const learningPath = learningPaths?.find(path => path.idlearningpath === learningPathId);
    const firstLesson = lessons?.find(lesson => lesson.idlearningpath === learningPathId && lesson.idlesson === sectionIndex);
    return firstLesson ? firstLesson.name : "First Lesson Not Found";
  };

  const getLearningPathName = (id) => {
    const learningPath = learningPaths?.find(path => path.idlearningpath === id);
    return learningPath ? learningPath.name : "Learning Path Not Found";
  };

  const renderCourseSection = (section, sectionIndex) => (
    <View key={sectionIndex} style={styles.sectionContainer}>
        {/* <Text style={{color: 'red'}}>{getFirstLessonName(8)}</Text> pt testare */}
      <View style={styles.sectionHeader}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.sectionTitle, { color: Colors[colorScheme ?? "light"].text }]}>
            {section.id}
          </Text>
        </View>
      </View>
      <View style={styles.lessonsContainer}>
        {section.data[0].exercises.map((exercise, lessonIndex) => {
          const isCurrentLesson = sectionId === sectionIndex && lessonId === lessonIndex;
          const isFinishedLesson = sectionIndex < sectionId || (sectionIndex === sectionId && lessonIndex < lessonId);

          return (
            <LessonItem
              key={lessonIndex}
              index={lessonIndex}
              circleRadius={CIRCLE_RADIUS}
              currentExercise={exercise}
              isCurrentLesson={isCurrentLesson}
              isFinishedLesson={isFinishedLesson}
              lessonDescription={exercise.definition.name}
              totalExercise={section.data[0].exercises.length}
              style={{}}
              onPress={() => {
                setSectionId(sectionIndex);
                setLessonId(lessonIndex);
                navigation.navigate('exercisePage', { exerciseId: exercise.id });
              }}
            />
          );
        })}
      </View>
    
    </View>
  );

  return (
    <ScrollView>
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].tabBackground }]}>
    <CourseDetailsBar courseName={getLearningPathName(learningPathId)} courseImg={`@/assets/icons/${language.img}`} />
      {language.sections.map((section, index) =>
          renderCourseSection(section, index)
        )}
      
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        
      </ScrollView>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 5,
    paddingBottom: 5,
    gap: 10,
  },
  sectionContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lessonsContainer: {
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
