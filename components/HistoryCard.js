import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HistoryCard = ({day, date, name, time}) => {
  
  return (
    <View style={styles.History}>
      <View style={[styles.satParent, styles.parentPosition]}>
        <Text style={[styles.sat, styles.satFlexBox]}>{day}</Text>
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <Text style={styles.text}>{date[0]}</Text>
        </View>
        <Text style={[styles.schedule, styles.satFlexBox]}>
          {name} scheduled a meeting on {date}
        </Text>
        <Text style={[styles.clickForDetail, styles.pmTypo]}>
          Click for detail
        </Text>
        <Text style={[styles.pm, styles.pmTypo]}>{time}</Text>
      </View>
      <View style={[styles.historyParent, styles.parentPosition]}>
        <Text style={[styles.history, styles.satFlexBox]}>History</Text>
        <Image
          style={[styles.instanceIcon, styles.wrapperPosition]}
          contentFit="cover"
          source={require("../assets/1987-instance1.png")}
        />
      </View>
    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  parentPosition: {
    width: 393,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  satFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  wrapperPosition: {
    left: 22,
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  sat: {
    left: 28,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.7,
    color: Color.colorDimgray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: 15,
  },
  text: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.8,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  wrapper: {
    top: 25,
    borderRadius: Border.br_81xl,
    width: 32,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  schedule: {
    top: 16,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    color: Color.colorGray_500,
    left: 66,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  clickForDetail: {
    top: 35,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.5,
    left: 66,
  },
  pm: {
    top: 49,
    left: 339,
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.4,
  },
  satParent: {
    top: 55,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderBottomWidth: 1,
    height: 64,
    overflow: "hidden",
  },
  history: {
    marginLeft: -34.5,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_300,
    top: 15,
  },
  instanceIcon: {
    top: 14,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  historyParent: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 52,
  },
  History: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    top: 35,
    height: 852,
    overflow: "hidden",
  },
});

export default HistoryCard;
