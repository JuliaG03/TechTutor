import { StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme'; // Assuming you have a color scheme hook
import { Colors } from '@/constants/Colors'; 

const stylesView = () => {
  const colorScheme = useColorScheme();

  return StyleSheet.create({
    root: {
      alignItems: 'center',
      paddingBottom: '30%',
    },
    bigView: {
      width: '100%', 
      height: 700,
      paddingHorizontal: 16, 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100%',
      paddingBottom: '20%',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: Colors[colorScheme ?? 'light'].textC
    },
    subtitle: {
      fontSize: 15,
      color: Colors[colorScheme ?? 'light'].textC
    },
    icon: {
        color: Colors[colorScheme ?? 'light'].green,
    },
  });
};

export default stylesView;
