import * as React from "react";
import { useState, useRef } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {firebaseConfig} from '../firebase/firebaseConfig'
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from 'firebase/compat/app'

const Screen1 = () => {
  const navigation = useNavigation();


  {/* *****************************************Variables for authentication**************************************************************** */}
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('')
  const [verificationId, setVerificationId] = useState(null)
  const recaptchaVerifier = useRef(null)
  const [otpSent, setOtpSent] = useState(false)


  {/* *******************************************SEND OTP**************************************************************** */}
  const handleSendOtp = async () => {
    try{
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId)
      setPhoneNumber('');
      alert('OTP has been sent')
      setOtpSent(true)
    }catch(error){
      console.log(error)
    }
  };


    {/* *****************************************Submit OTP**************************************************************** */}
  const handleOTPSubmit = async () => {
    try{
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      firebase.auth().signInWithCredential(credential)
      .then(() => {
        navigation.navigate('Home')
        setOtp('')
      })
      .catch((error) => {
        console.log(error)
      })
      setOtp('')
    }catch(error){
      console.log(error)
    }
  }


  return (
    <View style={styles.screen1}>

  {/* *****************************************LOGO**************************************************************** */}
      <Text style={styles.cld}>
        <Text style={styles.cl}>CL</Text>
        <Text style={styles.d}>D</Text>
      </Text>
      <Image
        style={styles.scooby741Icon}
        contentFit="cover"
        source={require("../assets/scooby-74-1.png")}
      />
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={styles.instanceParent}>
          <Image
            style={styles.instanceIcon}
            contentFit="cover"
            source={require("../assets/1160-instance1.png")}
          />


{/* *******************************************OTP Verification**************************************************************** */}    
        
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          />
        
        {!otpSent && (<TextInput style={[styles.mobileNo, styles.sendOtpSpaceBlock]} value={phoneNumber} onChange={(e) => setPhoneNumber(e.nativeEvent.text)} placeholder="Mobile No. with +Country Code"></TextInput>)}
        </View>
        <View style={[styles.lineParent, styles.frameItemPosition]}>
          <View style={styles.frameChild} />
          <TouchableOpacity onPress={handleSendOtp}>
            <Text style={[styles.sendOtp, styles.sendOtpSpaceBlock]}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={styles.instanceParent}>
          <Image
            style={styles.instanceIcon}
            contentFit="cover"
            source={require("../assets/password-1.png")}
          />
          <TextInput style={[styles.mobileNo, styles.sendOtpSpaceBlock]} value={otp} onChange={(e) => setOtp(e.nativeEvent.text)} placeholder="Enter OTP"/>
        </View>
        <View style={[styles.frameItem, styles.frameItemPosition]} />
      </View>
      <Pressable                                                              //This calls for home page when otp is verified
        style={[styles.frameContainer, styles.frameLayout]}
        onPress={handleOTPSubmit}
      >
        <View style={[styles.frameItem, styles.frameItemPosition]} />
        <Text style={styles.login}>Login</Text>
      </Pressable>
    </View>
  );
};



{/* ************************************Styling**************************************************************** */}

const styles = StyleSheet.create({
  frameLayout: {
    height: 52,
    width: 349,
    borderRadius: Border.br_3xs,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  sendOtpSpaceBlock: {
    marginLeft: 10,
    textAlign: "left",
  },
  frameItemPosition: {
    left: 276,
    alignItems: "center",
    position: "absolute",
  },
  cl: {
    color: Color.colorBlack,
  },
  d: {
    color: "#0500e0",
  },
  cld: {
    top: 113,
    left: 157,
    fontSize: 40,
    fontFamily: FontFamily.leckerliOneRegular,
    textAlign: "left",
    position: "absolute",
  },
  scooby741Icon: {
    top: 192,
    left: 76,
    width: 242,
    height: 242,
    position: "absolute",
  },
  instanceIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mobileNo: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.colorGray_100,
  },
  instanceParent: {
    marginTop: -12,
    left: 10,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderRightWidth: 1,
    width: 1,
    height: 39,
  },
  sendOtp: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDimgray,
  },
  lineParent: {
    marginTop: -19,
    flexDirection: "row",
    left: 276,
    top: "50%",
  },
  frameParent: {
    top: 492,
    backgroundColor: Color.colorWhitesmoke,
    width: 349,
    borderRadius: Border.br_3xs,
    left: 22,
  },
  frameItem: {
    top: 5,
  },
  frameGroup: {
    top: 574,
    backgroundColor: Color.colorWhitesmoke,
    width: 349,
    borderRadius: Border.br_3xs,
    left: 22,
  },
  login: {
    marginTop: -14,
    marginLeft: -30.5,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  frameContainer: {
    top: 686,
    backgroundColor: Color.colorMediumblue_200,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowOffset: {
      width: 4,
      height: 1,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 349,
    borderRadius: Border.br_3xs,
    left: 22,
  },
  screen1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});



export default Screen1;
