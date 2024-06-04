import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Animated, StyleSheet, Image, TextInput, ImageBackground, Platform, Modal, PanResponder, FlatList } from 'react-native'
import React, { useRef, useLayoutEffect } from 'react';
import CustomInput from '@/components/CustomInput';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const Support = () => {
    const colorScheme = useColorScheme();
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello! How can we help you today?', sender: 'support' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim().length === 0) return;

        const newMessage = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        setInput('');

        setTimeout(() => {
            const autoReply = { id: Date.now().toString(), text: 'Thank you for reaching out! Our support team will contact you shortly.', sender: 'support' };
            setMessages((prevMessages) => [...prevMessages, autoReply]);
        }, 1000);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        messageList: {
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 20,
        },
        messageContainer: {
            padding: 10,
            marginVertical: 5,
            borderRadius: 5,
            maxWidth: '80%',
        },
        userMessage: {
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
            alignSelf: 'flex-end',
        },
        supportMessage: {
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            alignSelf: 'flex-start',
        },
        inputContainer: {
            flexDirection: 'row',
            padding: 10,
            borderTopWidth: 1,
            borderColor: Colors[colorScheme ?? 'light'].tabTopColor,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
        },
        input: {
            flex: 1,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: Colors[colorScheme ?? 'light'].tabTopColor,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            marginRight: 10,
        },
        sendButton: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
            padding: 10,
            borderRadius: 5,
        },
        sendIcon: {
            color: Colors[colorScheme ?? 'light'].background,
        },
        messageText: {
            color: Colors[colorScheme ?? 'light'].text,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.messageList}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageContainer,
                            item.sender === 'user' ? styles.userMessage : styles.supportMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message"
                    placeholderTextColor={Colors[colorScheme ?? 'light'].textInputPlaceholder}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Icon name="send" size={20} style={styles.sendIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Support;
