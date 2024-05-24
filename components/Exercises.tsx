import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import images from '@/constants/images';

const Exercises = ({ exercise }) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const navigateToExercisePage = () => {
    navigation.navigate('exercisePage', { data: exercise });
  };

  return (
    exercise && (
      <TouchableOpacity onPress={navigateToExercisePage} style={styles.container}>
        <AnimatedCircularProgress
          size={120}
          width={10}
          fill={exercise.definition.levels}
          rotation={135}
          tintColor={Colors[colorScheme ?? 'light'].tint}
          backgroundColor={Colors[colorScheme ?? 'light'].tabBackground}>
          {() => (
            <View style={{ backgroundColor: Colors[colorScheme ?? 'light'].icon }}>
              <Image
                style={styles.image}
                source={{ uri: images.logo }}
                resizeMode="cover"
              />
            </View>
          )}
        </AnimatedCircularProgress>
        <Text style={styles.title}>{exercise.definition.name}</Text>
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Exercises;
