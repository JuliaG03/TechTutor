import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Privacy= () => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            paddingHorizontal: 20,
            paddingTop: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].textColor,
            marginBottom: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].textColor,
            marginBottom: 10,
        },
        text: {
            fontSize: 16,
            color: Colors[colorScheme ?? 'light'].textColor,
            marginBottom: 10,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Privacy Policy</Text>
                <Text style={styles.sectionTitle}>GDPR Compliance</Text>
                <Text style={styles.text}>
                    We are committed to complying with the General Data Protection Regulation (GDPR). This regulation ensures that your data is protected and that you have control over your personal information.
                </Text>
                <Text style={styles.sectionTitle}>Data Collection</Text>
                <Text style={styles.text}>
                    We collect personal information that you provide to us, such as your name, email address, and phone number. We also collect data about your interactions with our app, including usage statistics and preferences.
                </Text>
                <Text style={styles.sectionTitle}>Data Use</Text>
                <Text style={styles.text}>
                    Your personal data is used to provide and improve our services, communicate with you, and ensure the security of our platform. We do not share your information with third parties without your explicit consent.
                </Text>
                <Text style={styles.sectionTitle}>Data Protection</Text>
                <Text style={styles.text}>
                    We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or deletion. Our security protocols are regularly reviewed and updated to ensure the highest level of protection.
                </Text>
                <Text style={styles.sectionTitle}>Your Rights</Text>
                <Text style={styles.text}>
                    Under the GDPR, you have the right to access, correct, or delete your personal data. You can also object to the processing of your data or request that we restrict its use. If you wish to exercise any of these rights, please contact us at support@example.com.
                </Text>
                <Text style={styles.sectionTitle}>Contact Us</Text>
                <Text style={styles.text}>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </Text>
                <Text style={styles.text}>
                    Email: support@example.com{'\n'}
                    Phone: +123 456 7890{'\n'}
                    Address: 123 Privacy St., Data City, DC 12345
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Privacy;
