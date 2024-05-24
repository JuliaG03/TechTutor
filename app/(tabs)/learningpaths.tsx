import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Exercises from "@/components/Exercises";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import data from "@/data/courseData.json";

import { StatusBar } from "expo-status-bar";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const LearningPaths = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const languageData = data.language[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="items-center flex-1" style={{backgroundColor: Colors[colorScheme ?? "light"].tabBackground}}>
      <StatusBar style="auto"/>
      <FlatList
        data={languageData.sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default LearningPaths;

const renderSection = ({ item }) => {
  const { id, data } = item;
  
  return (
    <View className="flex-1 pb-[60px]">
      {data.map((tier) => {
        return (
          <View className="flex flex-row justify-evenly py-[10px]" key={tier.tier}>
            {tier.exercises.map((exercise) => {
              return <Exercises exercise={exercise} key={exercise.id} />;
            })}
          </View>
        );
      })}
    </View>
  );
};