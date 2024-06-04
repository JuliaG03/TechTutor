/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#3cb494';
const tintColorDark = '#7f65c4';
const appGreen = '#2ebf91';
const appPurple = '#8360c3';

export const Colors = {
    light: {
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
        tabBackground: '#FFFFFF',
        tabTopColor: '#232533',
        backgroundInput: '#F5F9FF',
        buttonBackground: appPurple,
        borderButton: appGreen,
        textInputPlaceholder: '#78909C',
        text: '#B0BEC5',
        textColor: appGreen,
        textColorPrimary: appGreen,
        textC: '#5AC8A3',
        green: appGreen,
        purple: appPurple,
        green2: appPurple,
        purple2: appPurple,
        darkPurple: appPurple,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
        tabBackground: '#26292B',
        tabTopColor: '#9BA1A6',
        backgroundInput: '#2C2F33',
        buttonBackground: appPurple,
        borderButton: appGreen,
        textInputPlaceholder: '#78909C',
        textColor: '#B0BEC5',
        textColorPrimary: appGreen,
        textC: '',
        green: appGreen,
        purple: appPurple,
        green2: appPurple, //purple arata mai put togheter pt text
        purple2: '#E6E6FA',
        darkPurple: appPurple,
    },
};
