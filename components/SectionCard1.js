import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity, Pressable, SafeAreaView } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react'
import FilterContainer from "./FilterContainer"

const SectionCard1 = ({ itemCode }) => {

  const navigation = useNavigation();
  const [filter, setFilter] = useState(false);

  function toggleFilter(){                                //checks if filter is clicked or not
    if(filter){setFilter(false)}
    else{setFilter(true)}
  }

  return (
    <SafeAreaView style={styles.instanceParent}>

{/* ************************************FILTER**************************************************************** */}
      <Pressable onPress={toggleFilter}>
      <Image
        style={[styles.instanceIcon, styles.instanceIconLayout]}
        contentFit="cover"
        source={require("../assets/1746-instance.png")}
      />
      </Pressable>

{/* ************************************Home Title**************************************************************** */}
      <Text style={styles.home}>Home</Text>

{/* ************************************Notifications**************************************************************** */}
      <View style={[styles.instanceGroup, styles.instancePosition]}>
        <Pressable onPress={() => navigation.navigate("Notifications")}>
        <Image
          style={styles.instanceIconLayout}
          contentFit="cover"
          source={require("../assets/2039-instance.png")}
        />
        </Pressable>

{/* ************************************History**************************************************************** */}
        <Pressable onPress={() => navigation.navigate("History")}>
        <Image
          style={[styles.instanceIcon2, styles.instanceIconLayout]}
          contentFit="cover"
          source={itemCode}
        />
        </Pressable>
      </View>

      {filter && <FilterContainer />}
    </SafeAreaView>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  instanceIconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  instancePosition: {
    top: 14,
    position: "absolute",
  },
  instanceIcon: {
    left: 22,
    top: 14,
    position: "absolute",
  },
  home: {
    marginLeft: -28.5,
    top: 15,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  instanceIcon2: {
    marginLeft: 18,
  },
  instanceGroup: {
    left: 330,
    flexDirection: "row",
  },
  instanceParent: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 52,
    position: "absolute",
  },
});



export default SectionCard1;
