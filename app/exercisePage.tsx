import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import TalkingBallon from '@/components/TalkingBallon';
import { useAuth } from '@/providers/AuthProvider';

const ExercisePage = ({ route }) => {
    const { idLearningPath, idLesson } = route.params;
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const { userDidLesson, questions: allQuestions, answers: allAnswers, loseLife } = useAuth();
    const { userData } = useAuth();

    const [row, setRow] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Adăugăm starea pentru a ține evidența opțiunii selectate
    const [buttonColor, setButtonColor] = useState(null); // Starea pentru culoarea butonului

    useEffect(() => {
        const lessonQuestions = allQuestions?.filter(
            question => question.idlesson === idLesson && question.idlearningpath === idLearningPath
        );

        setQuestions(lessonQuestions);
        if (lessonQuestions.length > 0) {
            setCurrentQuestion(lessonQuestions[0]);
        }
    }, [idLesson, idLearningPath]);

    useEffect(() => {
        if (questions.length > 0 && row <= questions.length) {
            setCurrentQuestion(questions[row - 1]);
        }
    }, [row, questions]);

    useEffect(() => {
        if (currentQuestion) {
            const lessonOptions = allAnswers?.filter(
                answer =>
                    answer.idquestion === currentQuestion.idquestion &&
                    answer.idlesson === idLesson &&
                    answer.idlearningpath === idLearningPath
            );
            setOptions(lessonOptions);
        }
    }, [currentQuestion, idLesson, idLearningPath]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleOptionPress = (index, option) => {
        setSelectedOptionIndex(index);
        if (option.correct) {
            if (row < questions.length) {
                console.log("");
                setRow(row + 1);
                setButtonColor('green'); // Setăm culoarea butonului la verde pentru răspunsul corect
            } else {
                Alert.alert(
                    'Congratulations for finishing the quiz! You earn 10 points. Current score: ' + (userData?.score ?? 0).toString()
                );                
                userDidLesson(idLesson, idLearningPath);
                navigation.navigate('LessonContent', { idLearningPath: idLearningPath, idLesson: idLesson });
            }
        } else {
           
            Alert.alert('Wrong answer! Lost one life');
            loseLife();
            navigation.navigate('LessonContent', { idLearningPath: idLearningPath, idLesson: idLesson });
            setButtonColor('red'); // Setăm culoarea butonului la roșu pentru răspunsul incorect
        }
        setTimeout(() => {
            setSelectedOptionIndex(null); // Resetăm indexul opțiunii selectate
            setButtonColor(null); // Revenire la culoarea inițială a butonului
        }, 200);
    };

    const progressValue = () => {
        return row / questions.length;
    };

    const Cross = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('LessonContent', { idLearningPath: idLearningPath, idLesson: idLesson })} style={{ padding: 10 }}>
                <Svg width={30} height={30} viewBox="0 0 14 14" fill="none">
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

    if (!currentQuestion) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, minHeight: 900, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
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
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors[colorScheme ?? 'light'].text }}>
                            {row}/{questions.length}
                        </Text>
                    </View>

                    <Text style={{
                        fontSize: 18, fontWeight: 'bold', marginTop:
                            20, color: Colors[colorScheme ?? 'light'].text
                    }}>
                        {currentQuestion.questiontext}
                    </Text>
                    <View style={{ marginTop: 10 }}>
                        <TalkingBallon sentence={currentQuestion.questiontext} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: index === selectedOptionIndex ? buttonColor : Colors[colorScheme ?? 'light'].tint,
                                    padding: 16,
                                    borderRadius: 8,
                                    marginBottom: 10,
                                }}
                                onPress={() => handleOptionPress(index, option)}
                            >
                                <Text style={{ color: index === selectedOptionIndex ? 'white' : Colors[colorScheme ?? 'light'].text }}>
                                    {option.answertext}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <StatusBar translucent={false} style="auto" />
            </SafeAreaView>
        </ScrollView>
    );
};

export default ExercisePage;
