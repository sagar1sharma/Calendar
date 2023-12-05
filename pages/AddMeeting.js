import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const AddMeeting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.AddMeeting}>

{/* ************************************Back Button**************************************************************** */}
      <Pressable onPress={() => navigation.navigate("Home")}>
      <Image
        style={styles.basilcrossSolidIcon}
        contentFit="cover"
        source={require("../assets/basilcrosssolid.png")}
      />
      </Pressable>

{/* ************************************Create Button**************************************************************** */}
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.createWrapper}>
        <Text style={styles.create}>Create</Text>
      </Pressable>

{/* ************************************Title**************************************************************** */}
      <TextInput style={styles.addTitle} placeholder="Add Title" placeholderTextColor="red"></TextInput>
      <View style={[styles.AddMeetingChild, styles.AddMeetingLayout]} />
      <View style={[styles.AddMeetingItem, styles.AddMeetingLayout]} />
      <Image
        style={[styles.iconamoonclockLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconamoonclocklight.png")}
      />

{/* ************************************Dates and Times**************************************************************** */}
      <View style={[styles.sat25Dec2023Wrapper, styles.wrapperShadowBox]}>
        <TextInput placeholder="Sat, 25 Dec  " style={[styles.sat25Dec, styles.sat25DecTypo]}>
        </TextInput>
      </View>
      <View style={[styles.pmWrapper, styles.wrapperShadowBox]}>
        <TextInput placeholder="12:30 pm  " style={[styles.sat25Dec, styles.sat25DecTypo]}></TextInput>
      </View>
      <View style={[styles.sat25Dec2023Container, styles.containerShadowBox]}>
        <TextInput placeholder="Sat, 25 Dec  " style={[styles.sat25Dec, styles.sat25DecTypo]}>
        </TextInput>
      </View>
      <View style={[styles.pmContainer, styles.containerShadowBox]}>
        <TextInput placeholder="11:30 pm  " style={[styles.sat25Dec, styles.sat25DecTypo]}></TextInput >
      </View>

{/* ************************************Other Remaining Sections**************************************************************** */}
      <Text style={[styles.allDay, styles.allTypo]}>All Day</Text>
      <Text style={[styles.allDay1, styles.allTypo]}>All Day</Text>
      <Text style={[styles.addPeople, styles.allTypo]}>Add People</Text>
      <Image
        style={[styles.instanceIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1963-instance.png")}
      />
      <View style={styles.AddMeetingInner} />
      <View style={[styles.frameView, styles.frameLayout]} />
      <View style={[styles.frameParent, styles.frameLayout]}>

{/* ************************************Number of People**************************************************************** */}
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <TextInput placeholder="Number of People" style={[styles.searchPeople, styles.frameChildPosition]}>
        </TextInput>
      </View>
      <Image
        style={[styles.instanceIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1160-instance.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/frame-26.png")}
      />


    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  AddMeetingLayout: {
    height: 1,
    width: 350,
    borderTopWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    left: 22,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  wrapperShadowBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    top: 151,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sat25DecTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
  },
  containerShadowBox: {
    top: 213,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  allTypo: {
    color: Color.colorDarkslategray,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  frameLayout: {
    width: 321,
    borderRadius: Border.br_xs,
    left: 50,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition: {
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  addTitle: {
    top: 68,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 48,
    position: "absolute",
  },
  basilcrossSolidIcon: {
    top: 16,
    width: 24,
    height: 24,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  create: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  createWrapper: {
    top: 14,
    left: 292,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumblue_200,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  AddMeetingChild: {
    top: 97,
  },
  AddMeetingItem: {
    top: 264,
  },
  iconamoonclockLight: {
    top: 114,
    width: 18,
    overflow: "hidden",
    left: 22,
  },
  sat25Dec: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    color: Color.colorBlack,
  },
  sat25Dec2023Wrapper: {
    left: 22,
  },
  pmWrapper: {
    left: 297,
  },
  sat25Dec2023Container: {
    left: 22,
  },
  pmContainer: {
    left: 297,
  },
  allDay: {
    top: 115,
    left: 49,
    color: Color.colorDarkslategray,
    letterSpacing: 0.7,
  },
  allDay1: {
    top: 282,
    left: 49,
    color: Color.colorDarkslategray,
    letterSpacing: 0.7,
  },
  addPeople: {
    top: 401,
    color: Color.colorDarkslategray,
    letterSpacing: 0.7,
    left: 48,
  },
  instanceIcon: {
    left: 347,
    top: 114,
    width: 18,
    overflow: "hidden",
  },
  AddMeetingInner: {
    top: 176,
    left: 79,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    borderRightWidth: 2,
    width: 2,
    height: 34,
    position: "absolute",
  },
  frameView: {
    top: 310,
    borderColor: Color.colorMediumpurple,
    borderWidth: 1,
    height: 73,
    width: 321,
    borderRadius: Border.br_xs,
    left: 50,
    borderStyle: "solid",
  },
  frameChild: {
    left: 27,
    alignItems: "center",
    top: "50%",
    marginTop: -8,
  },
  searchPeople: {
    left: 10,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    top: 429,
    height: 42,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    width: 321,
    borderRadius: Border.br_xs,
    left: 50,
    backgroundColor: Color.colorWhite,
  },
  instanceIcon1: {
    top: 400,
    left: 22,
    overflow: "hidden",
  },
  frameIcon: {
    top: 281,
    left: 22,
  },
  AddMeeting: {
    flex: 1,
    width: "100%",
    top: 35,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});



export default AddMeeting;
