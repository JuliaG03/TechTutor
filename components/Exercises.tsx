import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import images from "@/constants/images";

const Exercises = ({ exercise }) => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    return (
        exercise && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("exercisePage", (exercise = exercise))
              }
              className="items-center m-1.5"
            >
              <AnimatedCircularProgress
                size={120}
                width={10}
                fill={exercise.definition.levels}
                rotation={135}
                tintColor={Colors[colorScheme ?? "light"].tint}
                backgroundColor={Colors[colorScheme ?? "light"].tabBackground}
              >
                {() => (
                  <View
                    style={{
                      backgroundColor: Colors[colorScheme ?? "light"].icon,
                    }}
                  >
                    <Image
                      className="w-13 h-13"
                      source={{
                        uri: images.logo,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                )}
              </AnimatedCircularProgress>
              <Text className="font-pregular text-lg mt-1.5">{exercise.definition.name}</Text>
            </TouchableOpacity>
          )
        );
      };
      
      export default Exercises;