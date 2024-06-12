import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Alert, View, Text, Animated, StyleSheet, Image,TextInput, ImageBackground, Platform, Modal, PanResponder} from 'react-native'
import React, { useRef, useLayoutEffect } from 'react';
import CustomInput from '@/components/CustomInput';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import  images  from '../constants/images';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import Toast from 'react-native-toast-message';
import BackNavigationHeader from '@/components/BackNavigationHeader';

const EditProfileScreen = () => {
 // const fall = new Animated.Value(1);
//   const bs = useRef(null);
  const { userData, updateUser } = useAuth();
  const [username, setUsername] = useState(userData?.username || '');
  const [phone, setPhone] = useState(userData?.phone || '');
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  };
  
  const colorScheme = useColorScheme();
  const generatedStyles = stylesView(); 

  const navigation = useNavigation();

  //function to handle the back button press
  const onBackPress = () => {
    navigation.navigate('ProfileScreen');
  };    
  //function to handle the take photo button press
  const onTakePhotoPress = () => {
    navigation.navigate('ProfileScreen');
  };
  //function to handle the choose from gallery button press
  const onChooseFromGalleryPress = () => {
    navigation.navigate('ProfileScreen');
  };
  //function to handle the forgot password button press
  const forgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
}//function to handle the submit button press
   const onSubmitPress = () => {
       updateUser({ username, phone });
       //Alert.alert('Changes made succsefully');
      // navigation.navigate('ForgotPassword');
  };

  const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: Colors[colorScheme ?? 'light'].green2,
    },
    container: {
      flex: 1,
      backgroundColor: Colors[colorScheme ?? 'light'].background,
    },
    image: {
        height:100,
        width: 100, 
        alignSelf: 'center',
        borderRadius: 5
    },
    options: {
        marginTop: 30, 
        marginLeft: 20,
        alignItems: 'center'
    },
    header: {
        backgroundColor: Colors[colorScheme ?? 'light'].darkPurple,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        margin: 20,
        alignSelf:'center',
        bottom: 0,
        position: 'absolute'
      },
    panelHandle: {
      width: 50,
      height: 8,        
      borderRadius: 5,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelMenu: {
      backgroundColor: Colors[colorScheme ?? 'light'].buttonBackground,
      width: '100%',
      alignItems: 'center',
    },
    blurContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      justifyContent: 'center',
      alignItems: 'center',
       
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
 });

  
    return (
        <SafeAreaView  style={{ ...styles.container}}>
            <BackNavigationHeader/>
            <View style={styles.container}>
                <BackNavigationHeader/>
                <TouchableOpacity onPress={toggleModal}>
                    <ImageBackground source={images.profile} style={styles.image}>
                        <Icon name="camera" size={25} style={[generatedStyles.icon, {opacity: 0.7, borderRadius: 10,}]} />
                    </ImageBackground>
                </TouchableOpacity>
                    
                <View style={styles.options}>
                    <CustomInput
                       // placeholder={userData?.username }
                        value={username}
                        setValue={setUsername}
                        secureTextEntry={false}
                       
                        icon="account"
                    />
                    <CustomInput
                        //placeholder={userData?.phone }
                        value={phone}
                        setValue={setPhone}
                        secureTextEntry={false}
                        
                        icon="phone"
                        keyboardType='number-pad'
                    />
                 
                    <CustomButton text="Submit" onPress={onSubmitPress } type="primary" />
                    <CustomButton
                        text="Forgot password?"
                        onPress={forgotPasswordPress}
                        type="Tertiary"
                    />
                    <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
                      {isModalVisible && <View style={styles.blurContainer} />}
                        <View style={styles.header}>
                          <View style={styles.panelHandle}></View>
                          <View style={styles.panelMenu}>
                              <View style={{alignItems:'center', marginBottom:20}}>
                                <Text style={generatedStyles.title}>Upload Photo</Text>
                                <Text style={generatedStyles.subtitle}>Choose Your Profile Picture</Text>
                              </View>
                                <CustomButton text="Take Photo" onPress={onTakePhotoPress} type="primary" buttonWidth={370}/>
                                <CustomButton text="Choose From Gallery" onPress={onChooseFromGalleryPress} type="primary" buttonWidth={370} />
                                <CustomButton
                                  text="Cancel"
                                  onPress={toggleModal}
                                  type="Tertiary"
                                />
                          </View>
              
                        </View>
                  </Modal>

                </View>
            
            </View>
        </SafeAreaView>
    );
}

export default EditProfileScreen;
