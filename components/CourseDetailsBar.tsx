import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import icons from '@/constants/icons';

const colorScheme = useColorScheme();

const CourseDetailsBar = ({ courseName, courseImg }) => {
  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].text }]}>
      <View style={styles.iconContainer}>
        <Image source={icons.python} style={styles.icon} />
      </View>
      <Text style={[styles.courseName, { color: Colors[colorScheme ?? "light"].tint }]}>
        {courseName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors[colorScheme ?? "light"].icon,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CourseDetailsBar;
