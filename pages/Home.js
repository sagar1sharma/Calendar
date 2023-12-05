import * as React from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import SectionCard1 from "../components/SectionCard1";
import UpcomingCardContainer from "../components/UpcomingCardContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Home}>

{/* ************************************HEADER**************************************************************** */}
      <SectionCard1
        itemCode={require("../assets/phclockcounterclockwisethin.png")}
      />
      <Text style={styles.upcoming}>Upcoming</Text>
      <Image
        style={styles.HomeChild}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />

{/* ************************************MEETING CARDS**************************************************************** */}
      <UpcomingCardContainer carCount="2" day="Fri" date="6" title="Meeting For Business" startTime="7.35" endTime="8.30" propTop={124} />
      <UpcomingCardContainer carCount="4" day="Sat" date="7" title="Personal Meeting" startTime="7.35" endTime="8.30" propTop={182} />
      <UpcomingCardContainer carCount="6" day="Thu" date="5" title="Sample Meeting" startTime="7.35" endTime="8.30" propTop={240} />
{/* Cards are manually written here, but can be mapped if used as an array, where add meeting can add more data to the array */}


{/* ************************************Add Meeting**************************************************************** */}
      <Pressable                                                                //This calls for add meeting page
        style={styles.frame}
        onPress={() => navigation.navigate("addmeeting")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
    </SafeAreaView>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
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
    height: 32,
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
  upcoming: {
    top: 79,
    left: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  HomeChild: {
    top: 78,
    left: 22,
    width: 2,
    height: 23,
    position: "absolute",
  },
  fri: {
    top: 124,
    color: Color.colorBlack,
  },
  fri1: {
    top: 182,
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorWhite,
  },
  wrapper: {
    top: 140,
    backgroundColor: Color.colorMediumblue_300,
  },
  text1: {
    color: Color.colorBlack,
  },
  container: {
    top: 198,
  },
  frameChild: {
    width: 27,
    height: 27,
  },
  frame: {
    top: 746,
    left: 335,
    backgroundColor: Color.colorMediumblue_200,
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  Home: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    top: 35
  },
});



export default Home;
