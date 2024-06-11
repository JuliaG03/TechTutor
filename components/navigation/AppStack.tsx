import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../../app/(auth)/sign-up';
import SignInScreen from '../../app/(auth)/sign-in';
import ConfirmEmail from '../../app/(auth)/ConfirmEmail'
import ForgotPassword from '@/app/(auth)/forgotpassword';
import ResetPassword from '../../app/(auth)/ResetPassword';
import Home from '../HomeScreen';
import LearningPaths from '../../app/(tabs)/learningpaths';
import exercisePage from '../../app/exercisePage';
import Exercises from '../Exercises';
import Profile from '@/app/(tabs)/profile';
import Index from '../../app/index';
import EditProfileScreen from '@/app/(tabs)/EditProfileScreen';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Settings from '@/app/(tabs)/settings';
import AuthProvider from '@/providers/AuthProvider';
import MainMenu from '@/components/MainMenu';
import Support from '@/app/(tabs)/support';
import LeaderBoard from '@/app/(tabs)/leaderboard';
import Notifications from '@/app/(tabs)/notifications';
import Privacy from '@/app/(tabs)/privacy';
import About from '@/app/(tabs)/about';
import {useAuth} from '@/providers/AuthProvider';
<<<<<<< Updated upstream
=======
import learningMain from '@/app/(tabs)/learningMain';
import LessonContent from '@/app/(tabs)/LessonContent';
>>>>>>> Stashed changes
const Stack = createStackNavigator();

const AppStackNavigation = () => {
    const colorScheme = useColorScheme();
    const { session } = useAuth();
    return (
        <AuthProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background, elevation: 0, shadowColor: Colors[colorScheme ?? 'light'].background } }}>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="MainMenu" component={MainMenu} />
                        <Stack.Screen name="LearningPaths" component={LearningPaths} />
                        <Stack.Screen name="ProfileScreen" component={Profile} options={{ title: '' }} />
                        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                        <Stack.Screen name="ResetPassword" component={ResetPassword} />
                        <Stack.Screen name="HomeScreen" component={Home} />
                        <Stack.Screen name="Index" component={Index} options={{ title: '' }} />
                        <Stack.Screen name="exercisePage" component={exercisePage} />
                        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
                        <Stack.Screen name="Settings" component={Settings} />
                        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
                        <Stack.Screen name="Support" component={Support} />
                        <Stack.Screen name="Notifications" component={Notifications} />
                        <Stack.Screen name="Privacy" component={Privacy} />
                        <Stack.Screen name="About" component={About} />
                 
                        
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="LessonContent" component={LessonContent} />
                    
            
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
};


export default AppStackNavigation;

