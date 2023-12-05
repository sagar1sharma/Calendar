import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const SectionCard = ({name, date, time}) => {
  const [tick, setTick] = React.useState(true);

  return (
    <View>
    {tick && <View style={styles.parentEle}>
      <Text
        style={styles.childEle}
      >{name} scheduled a meeting</Text>
      <Text style={[styles.date, styles.pmTypo]}>
        {date}
      </Text>
      <Text style={[styles.pm, styles.pmTypo]}>{time}</Text>

{/* ************************************Buttons**************************************************************** */}
      <Pressable onPress={() => {alert("Are you sure you want to decline"); setTick(false)}} style={[styles.declineWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.decline, styles.aClr]}>Decline</Text>
      </Pressable>
      <Pressable onPress={() => {alert("Are you sure you want to accept?"); setTick(false)}} style={[styles.acceptWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.decline, styles.aClr]}>Accept</Text>
      </Pressable>


{/* ************************************Intial of Name**************************************************************** */} 
      <LinearGradient
        style={styles.aWrapper}
        locations={[0, 1]}
        colors={["#ecaaab", "#bb9998"]}
      >
        <Text style={[styles.a, styles.aClr]}>A</Text>
      </LinearGradient>
    </View>}
    
    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  pmTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 93,
    borderRadius: Border.br_xl,
    top: 61,
    position: "absolute",
  },
  aClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  childEle: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 66,
    top: 16,
    position: "absolute",
  },
  date: {
    top: 35,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.5,
    left: 66,
  },
  pm: {
    top: 21,
    left: 339,
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.4,
  },
  decline: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
  },
  declineWrapper: {
    backgroundColor: Color.colorRed,
    left: 66,
  },
  acceptWrapper: {
    left: 169,
    backgroundColor: Color.colorMediumblue_200,
  },
  a: {
    marginTop: -14,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_5xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  aWrapper: {
    left: 22,
    borderRadius: Border.br_68xl,
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    top: 16,
    position: "absolute",
  },
  parentEle: {
    top: 56,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderBottomWidth: 1,
    width: 393,
    height: 96,
    overflow: "hidden",
    position: "absolute",
  },
});



export default SectionCard;
