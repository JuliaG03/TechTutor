import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Animated, StyleSheet, Image,TextInput, ImageBackground, Platform, Modal, PanResponder} from 'react-native'
import React, { useRef, useLayoutEffect } from 'react';
import CustomInput from '@/components/CustomInput';
import stylesView from '@/components/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import  images  from '../../constants/images';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';


const EditProfileScreen = () => {
 // const fall = new Animated.Value(1);
//   const bs = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  };

  const colorScheme = useColorScheme();
  const generatedStyles = stylesView(); 

  const navigation = useNavigation();



  const onBackPress = () => {
    navigation.navigate('ProfileScreen');
  };

  const onTakePhotoPress = () => {
    navigation.navigate('ProfileScreen');
  };

  const onChooseFromGalleryPress = () => {
    navigation.navigate('ProfileScreen');
  };

  const forgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
}
  const onSubmitPress = () => {
   // navigation.navigate('ProfileScreen');
   navigation.navigate('ForgotPassword');
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={onBackPress} style ={{marginLeft: 20}}>
          <Icon name="arrow-left" size={25} style={[generatedStyles.icon, { marginRight: 5 }]}/>
        </TouchableOpacity>
        <Text style={styles.text}>Back</Text>
      </View>
      ),
    });
  }, [navigation]);

  
    return (
        <SafeAreaView  style={{ ...styles.container}}>
            <View style={styles.container}>
               
                <TouchableOpacity onPress={toggleModal}>
                    <ImageBackground source={images.profile} style={styles.image}>
                        <Icon name="camera" size={25} style={[generatedStyles.icon, {opacity: 0.7, borderRadius: 10,}]} />
                    </ImageBackground>
                </TouchableOpacity>
                    
                <View style={styles.options}>
                    <CustomInput
                        placeholder="username"
                        // value={username}
                        // setValue={setUsername}
                        secureTextEntry={false}
                        icon="account"
                    />
                    <CustomInput
                        placeholder="phone number"
                        // value={username}
                        // setValue={setUsername}
                        secureTextEntry={false}
                        icon="phone"
                        keyboardType='number-pad'
                    />
                    <CustomInput
                        placeholder="email"
                        // value={username}
                        // setValue={setUsername}
                        secureTextEntry={false}
                        icon="email"
                        keyboardType='email-address'
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
