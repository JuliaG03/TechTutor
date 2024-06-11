import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, TextInput, StyleSheet, FlatList,
    KeyboardAvoidingView, Platform, TouchableOpacity,
    Keyboard, TouchableWithoutFeedback, Animated, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
//main component function
const Support = () => {
    const colorScheme = useColorScheme();
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello! How can we help you today?', sender: 'support', timestamp: new Date() },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const flatListRef = useRef(null);
    //function to handle the send button press
    const handleSend = () => {
        if (input.trim().length === 0) return;
        //create a new message object
        const newMessage = { id: Date.now().toString(), text: input, sender: 'user', timestamp: new Date() };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
        //simulate a typing indicator
        setTyping(true);
        //simulate a reply from the support team
        setTimeout(() => {
            setTyping(false);
            const autoReply = { id: Date.now().toString(), text: 'Thank you for reaching out! Our support team will contact you shortly.', sender: 'support', timestamp: new Date() };
            setMessages((prevMessages) => [...prevMessages, autoReply]);
        }, 3000);
    };
    //function to format the timestamp
    const formatTimestamp = (timestamp) => {
        return moment(timestamp).format('D MMM, h:mm A');
    };
    //styles
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
            padding: 15,
            marginVertical: 5,
            borderRadius: 20,
            maxWidth: '80%',
            alignSelf: 'flex-start',
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 2,
        },
        userMessage: {
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
            alignSelf: 'flex-end',
            borderBottomRightRadius: 0,
        },
        supportMessage: {
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            borderBottomLeftRadius: 0,
        },
        typingIndicator: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            marginVertical: 5,
            borderRadius: 20,
            backgroundColor: Colors[colorScheme ?? 'light'].backgroundInput,
            maxWidth: '50%',
            alignSelf: 'flex-start',
            borderBottomLeftRadius: 0,
        },
        typingText: {
            fontSize: 20,
            color: Colors[colorScheme ?? 'light'].text,
        },
        dot: {
            fontSize: 24,
            lineHeight: 24,
            color: Colors[colorScheme ?? 'light'].text,
            marginHorizontal: 1,
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
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Colors[colorScheme ?? 'light'].tabTopColor,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            marginRight: 10,
            color: Colors[colorScheme ?? 'light'].text,
        },
        sendButton: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
            padding: 10,
            borderRadius: 20,
        },
        sendIcon: {
            color: Colors[colorScheme ?? 'light'].background,
        },
        messageText: {
            color: Colors[colorScheme ?? 'light'].text,
        },
        timestampContainer: {
            marginTop: 5,
        },
        timestampText: {
            color: Colors[colorScheme ?? 'light'].text,
            fontSize: 10,
        },
        timestampRight: {
            alignSelf: 'flex-end',
            marginRight: 10,
        },
        timestampLeft: {
            alignSelf: 'flex-start',
            marginLeft: 10,
        },
    });
    //scroll to the end of the list when a new message is added
    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            ref={flatListRef}
                            style={styles.messageList}
                            data={messages}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View>
                                    <View
                                        style={[
                                            styles.messageContainer,
                                            item.sender === 'user' ? styles.userMessage : styles.supportMessage,
                                        ]}
                                    >
                                        <Text style={styles.messageText}>{item.text}</Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.timestampContainer,
                                            item.sender === 'user' ? styles.timestampRight : styles.timestampLeft,
                                        ]}
                                    >
                                        <Text style={styles.timestampText}>{formatTimestamp(item.timestamp)}</Text>
                                    </View>
                                </View>
                            )}
                            ListFooterComponent={
                                typing ? (
                                    <View style={styles.typingIndicator}>
                                        <Text style={styles.dot}>.</Text>
                                        <Text style={styles.dot}>.</Text>
                                        <Text style={styles.dot}>.</Text>
                                    </View>
                                ) : null
                            }
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                        placeholder="Type a message"
                        placeholderTextColor={Colors[colorScheme ?? 'light'].textInputPlaceholder}
                        onSubmitEditing={handleSend}
                        blurOnSubmit={false}
                    />
                    <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                        <Icon name="send" size={20} style={styles.sendIcon} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Support;
