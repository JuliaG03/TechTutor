import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const About = () => {
    const colorScheme = useColorScheme();
    const [activeSection, setActiveSection] = useState('about');
    const [fadeAnim] = useState(new Animated.Value(0));

    // Styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            paddingHorizontal: 20,
            paddingTop: 20,
        },
        sectionButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        sectionButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
        },
        sectionButtonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].tabTopColor,
        },
        section: {
            marginBottom: 20,
        },
        bubble: {
            backgroundColor: '#333333', // Dark grey background for the bubble
            padding: 20,
            borderRadius: 10,
        },
        sectionTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].textColor,
            marginBottom: 10,
        },
        text: {
            fontSize: 16,
            color: '#FFFFFF', // White text color
            marginBottom: 10,
            textAlign: 'justify',
            lineHeight: 24, // Increased line height for better readability
        },
        developerList: {
            marginLeft: 20,
            marginBottom: 10,
        },
        developerItem: {
            fontSize: 16,
            color: '#FFFFFF', // White text color
            marginBottom: 5,
            lineHeight: 24, // Increased line height for better readability
        },
    });

    // Function to handle the section change
    const handleSectionChange = (section) => {
        setActiveSection(section);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    // Returning the view
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionButtons}>
                <TouchableOpacity
                    style={[styles.sectionButton, activeSection === 'about' && { backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground }]}
                    onPress={() => handleSectionChange('about')}
                >
                    <Text style={[styles.sectionButtonText, activeSection === 'about' && { color: Colors[colorScheme ?? 'light'].tabTopColor }]}>About the App</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sectionButton, activeSection === 'team' && { backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground }]}
                    onPress={() => handleSectionChange('team')}
                >
                    <Text style={[styles.sectionButtonText, activeSection === 'team' && { color: Colors[colorScheme ?? 'light'].tabTopColor }]}>Meet the Team</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Animated.View style={[styles.bubble, { opacity: fadeAnim }]}>
                    {activeSection === 'about' ? (
                        <Text style={styles.text}>
                            TECHTUTOR is a mobile app designed to provide bite-sized tutorials for computer science topics, optimized for on-the-go learning. The app offers a diverse range of learning paths covering programming languages, algorithms, data structures, software development methodologies, cybersecurity, artificial intelligence, machine learning, web development, mobile app development, and more. Whether you're a beginner looking to learn the basics or an experienced developer wanting to expand your knowledge, TECHTUTOR has something for everyone.
                        </Text>
                    ) : (
                        <>
                            <View style={styles.developerList}>
                                <Text style={styles.developerItem}>- Julia Grasu</Text>
                                <Text style={styles.developerItem}>- Stefania-Flavia Fota</Text>
                                <Text style={styles.developerItem}>- Adela Petre-Soldan</Text>
                            </View>
                            <Text style={styles.text}>
                                TECHTUTOR was developed by a dedicated team of computer science enthusiasts for the Software Development Methods course at our university. Our team is committed to providing high-quality educational content and innovative learning experiences to users worldwide. We believe in the transformative power of education and technology to shape the future of learning.
                            </Text>
                        </>
                    )}
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default About;
