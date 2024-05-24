import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme();

const LessonItem = ({
  index,
  circleRadius,
  currentExercise,
  isCurrentLesson,
  isFinishedLesson,
  lessonDescription,
  totalExercise,
  style,
  onPress
}) => {
  

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={{backgroundColor: Colors[colorScheme ?? "light"].tint}} className="rounded-lg p-3 flex-row">
        <View style={[styles.circle, { width: circleRadius, height: circleRadius, backgroundColor: isCurrentLesson ? Colors[colorScheme ?? "light"].tabBackground : Colors[colorScheme ?? "light"].tabIconDefault }]}>
            <Text style={styles.circleText}>{index + 1}</Text>
        </View>
        <View style={styles.details}>
            <Text style={[styles.description, { color: Colors[colorScheme ?? "light"].text }]}>
            {lessonDescription}
            </Text>
            <Text style={styles.progress}>
            {isFinishedLesson ? 'Completed' : `Exercise ${currentExercise.id} of ${totalExercise}`}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginRight: 15,
  },
  circleText: {
    color: Colors[colorScheme ?? "light"].text,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progress: {
    color: Colors[colorScheme ?? "light"].text,
  },
});

export default LessonItem;
