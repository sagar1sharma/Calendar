import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UpcomingCardContainer = ({ carCount, propTop, title, startTime, endTime, day, date }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View>

{/* ************************************Day and Date**************************************************************** */}
      <View style={frameViewStyle}>
      <Text style={[styles.fri1, styles.friTypo]}>{day}</Text>
      <View style={[styles.container, styles.wrapperLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>{date}</Text>
      </View>
      </View>

{/* ************************************Card**************************************************************** */}
    <View
      style={[styles.frameParent, styles.frameParentPosition, frameViewStyle]}
    >
      <View style={styles.frameChild} />
      <Text style={[styles.meetingForBusiness, styles.pmFlexBox]}>
        {title}
      </Text>
      <Text style={[styles.pm, styles.pmFlexBox]}>{startTime} - {endTime}</Text>
      <Image
        style={[styles.instanceIcon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/1183-instance.png")}
      />
      <Text style={[styles.text, styles.pmFlexBox]}>{carCount}</Text>
    </View>

    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  frameParentPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  pmFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    marginTop: -8,
    top: "50%",
    alignItems: "center",
    left: 10,
    position: "absolute",
  },
  meetingForBusiness: {
    top: 7,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 10,
  },
  pm: {
    top: 29,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 10,
  },
  instanceIcon: {
    top: 11,
    left: 265,
    width: 24,
    height: 24,
  },
  text: {
    top: 13,
    left: 287,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorSteelblue_100,
  },
  frameParent: {
    top: 111,
    left: 65,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    width: 306,
    height: 48,
  },
  friTypo: {
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    left: 32,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    padding: Padding.p_3xs,
    height: 60,
    width: 32,
    left: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
});



export default UpcomingCardContainer;
