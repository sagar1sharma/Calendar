import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const FilterContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lineParent}>

{/* ************************************Header**************************************************************** */}
      <View style={[styles.frameChild, styles.childLayout]} />
      <Text style={[styles.fliter, styles.fliterClr]}>Fliter</Text>
      <Pressable
        style={styles.apply}
      >
        <Text style={styles.apply1}>Apply</Text>
      </Pressable>

{/* ************************************Dates**************************************************************** */}
      <View style={styles.frameParent}>
        <View style={styles.startDateParent}>
          <Text style={[styles.startDate, styles.dateTypo]}>Start Date</Text>
          <Text style={[styles.endDate, styles.dateTypo]}>End Date</Text>
        </View>
        <View style={[styles.sat25Dec2023Wrapper, styles.sat25ShadowBox]}>
          <TextInput placeholder="Sat, 25 Dec 2023    " placeholderTextColor="grey" style={[styles.sat25Dec, styles.fliterClr]}>
          </TextInput>
        </View>
        <View style={[styles.sat25Dec2023Container, styles.sat25ShadowBox]}>
          <TextInput placeholder="Sat, 25 Dec 2023    " placeholderTextColor="grey" style={[styles.sat25Dec, styles.fliterClr]}>
          </TextInput>
        </View>
        <View style={[styles.groupChild, styles.childLayout]} />
      </View>
    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  childLayout: {
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  fliterClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  dateTypo: {
    color: Color.colorGray_400,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  sat25ShadowBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    top: 35,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    top: 43,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    width: 350,
    left: 0,
  },
  fliter: {
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    top: 14,
    position: "absolute",
  },
  apply1: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorMediumblue_400,
    textAlign: "left",
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
  },
  apply: {
    left: 293,
    top: 14,
    position: "absolute",
  },
  startDate: {
    left: -3,
    width: 72,
  },
  endDate: {
    left: 171,
  },
  startDateParent: {
    marginLeft: -117,
    width: 234,
    height: 16,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  sat25Dec: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    textAlign: "left",
  },
  sat25Dec2023Wrapper: {
    left: 0,
  },
  sat25Dec2023Container: {
    left: 166,
  },
  groupChild: {
    top: 46,
    left: 124,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    width: 36,
  },
  frameParent: {
    marginLeft: -141.5,
    top: 59,
    width: 284,
    height: 57,
    left: "50%",
    position: "absolute",
  },
  lineParent: {
    top: 358,
    left: 22,
    borderRadius: Border.br_5xl,
    shadowRadius: 9.6,
    elevation: 9.6,
    width: 349,
    height: 136,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
});



export default FilterContainer;
