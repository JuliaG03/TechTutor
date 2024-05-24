import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Progress from "react-native-progress";
import TalkingBallon from '@/components/TalkingBallon';

const exercisepage = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params;
    const [row, setRow] = useState(1);
    const [questions, setQuestions] = useState(data.questions["q" + row]);
  
    useEffect(() => {
        let newData = data.questions["q" + row];
        setQuestions(newData);
    }, [row]);

    const checking = () => {
        if (Object.keys(questions).length - 1 > row) {
            setRow(row + 1);
        } else {
            navigation.goBack();
        }
    };

    const progressValue = () => {
        let x = row / (Object.keys(questions).length - 1);
        return x;
    };

    const Cross = ({ navigation }) => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Svg width={23} height={23} viewBox="0 0 14 14" fill="none">
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

    const width = Dimensions.get("window").width - 16 * 4 - 24 - 35;

    return (
    <SafeAreaView className="container">
        <View>
            <View className="row">
                <Cross navigation={navigation}/>
                <Progress.Bar
                    progress={progressValue()}
                    width={width - 50}
                    height={(width * 11) / 135}
                    color={Colors[colorScheme ?? "light"].tint}
                    borderColor={Colors[colorScheme ?? "light"].tabTopColor}
                    animated={true}
                    borderRadius={25}
                />

                <Text className="">5</Text>    
            </View>

            <Text className="">data.definition</Text>
            <View className="">
                <TalkingBallon sentence={questions.question}/>
            </View>
        </View>
      <Text className="mt-20" style={{color: Colors[colorScheme ?? "light"].text}}>exercisepage</Text>
    </SafeAreaView>
  )
}

export default exercisepage