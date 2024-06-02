import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../../app/(auth)/sign-up';
import SignInScreen from '../../app/(auth)/sign-in';
import ConfirmEmail from '../../app/(auth)/ConfirmEmail'
import ForgotPassword from '@/app/(auth)/ForgotPassword';
import ResetPassword from '../../app/(auth)/ResetPassword';
import Home from '../HomeScreen';
import LearningPaths from '../../app/(tabs)/learningpaths';
import exercisePage from '../../app/exercisePage';
import Exercises from '../Exercises';
import ProfileScreen from '@/app/(auth)/ProfileScreen';
import Index from '../../app/index';
import EditProfileScreen from '@/app/(auth)/EditProfileScreen';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Settings from '@/app/(tabs)/settings';
import AuthProvider from '@/providers/AuthProvider';
const Stack = createStackNavigator();

const AppStackNavigation = () => {
    const colorScheme = useColorScheme();
    return (
        <AuthProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background, elevation: 0, shadowColor: Colors[colorScheme ?? 'light'].background} }}>
                    <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: ''}}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="HomeScreen" component={Home} />
                    <Stack.Screen name="LearningPaths" component={LearningPaths} />
                    <Stack.Screen name="Index" component={Index} options={{title: ''}} />
                    <Stack.Screen name="exercisePage" component={exercisePage} />
                    <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} /> 
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
};


export default AppStackNavigation;

