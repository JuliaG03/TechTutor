import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from '@/components/TabIcon';

// stack pages
import SignUpScreen from '../../app/(auth)/sign-up';
import SignInScreen from '../../app/(auth)/sign-in';
import ConfirmEmail from '../../app/(auth)/ConfirmEmail'
import ForgotPassword from '@/app/(auth)/forgotpassword';
import ResetPassword from '../../app/(auth)/ResetPassword';
import LearningPaths from '../../app/learningpaths';
import exercisePage from '../../app/exercisePage';
import Index from '../../app/index';
import EditProfileScreen from '@/app/EditProfileScreen';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AuthProvider from '@/providers/AuthProvider';
import MainMenu from '@/components/MainMenu';
import Support from '@/app/support';
import Notifications from '@/app/notifications';
import Privacy from '@/app/privacy';
import About from '@/app/about';
import { useAuth } from '@/providers/AuthProvider';

// tab pages
import Profile from '@/app/(tabs)/profile';
import Settings from '@/app/(tabs)/settings';
import learningMain from '@/app/(tabs)/learningMain';
import LeaderBoard from '@/app/(tabs)/leaderboard';
import ProfileScreen from '@/app/(tabs)/profile';
import { icons } from '../../constants';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AppStackNavigation() {
    const colorScheme = useColorScheme();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background, elevation: 0, shadowColor: Colors[colorScheme ?? 'light'].background } }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Tabs" component={TabNavigation} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="LearningPaths" component={LearningPaths} />
            <Stack.Screen name="exercisePage" component={exercisePage} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

function TabNavigation() {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
                tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? 'light'].tabBackground,
                    borderTopWidth: 1,
                    borderTopColor: Colors[colorScheme ?? 'light'].tabTopColor,
                    height: 84
                }
            }}>
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="LearningMain"
                component={learningMain}
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.learningpaths}
                            color={color}
                            name="Learn"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="leaderboard"
                component={LeaderBoard}
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.leaderboard}
                            color={color}
                            name="Leaderboard"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.settings}
                            color={color}
                            name="Settings"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default function AppStack() {
    const { session } = useAuth();
    return (
        <AuthProvider>
            <NavigationContainer independent={true}>
                <AppStackNavigation />
            </NavigationContainer>
        </AuthProvider>
    )
}