import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import TalkingBallon from '@/components/TalkingBallon';

const ExercisePage = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { exercise } = route.params;
  const [row, setRow] = useState(1);
  const [questions, setQuestions] = useState(exercise.questions['q1']);

  useEffect(() => {
    setQuestions(exercise.questions['q' + row]);
  }, [row]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const checking = () => {
    if (Object.keys(exercise.questions).length > row) {
      setRow(row + 1);
    } else {
      navigation.goBack();
    }
  };

  const progressValue = () => {
    return row / Object.keys(exercise.questions).length;
  };

  const Cross = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Svg width={20} height={20} viewBox="0 0 14 14" fill="none">
          <Path
            d="M13 1L1 13M1 1l12 12"
            stroke="#AFAFAE"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    );
  };

  const width = Dimensions.get('window').width - 16 * 4 - 24 - 35;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Cross />
          <Progress.Bar
            progress={progressValue()}
            width={width - 50}
            height={(width * 11) / 135}
            color={Colors[colorScheme ?? 'light'].tint}
            borderColor={Colors[colorScheme ?? 'light'].tabTopColor}
            animated={true}
            borderRadius={25}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors[colorScheme ?? 'light'].text }}>5</Text>
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: Colors[colorScheme ?? 'light'].text }}>
          {exercise.definition.name}
        </Text>
        <View style={{ marginTop: 10 }}>
          <TalkingBallon sentence={questions.question} />
        </View>
        <View style={{ marginTop: 20 }}>
          {questions.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: Colors[colorScheme ?? 'light'].tint,
                padding: 16,
                borderRadius: 8,
                marginBottom: 10,
              }}
            //   onPress={() => handleOptionPress(option)}
            >
              <Text style={{ color: Colors[colorScheme ?? 'light'].text }}>
                {option.option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <StatusBar translucent={false} style="auto"/>

    </SafeAreaView>
  );
};

export default ExercisePage;
