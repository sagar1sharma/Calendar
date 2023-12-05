import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/NotificationCard";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Notifications}>


{/* ************************************Title**************************************************************** */}
      <View style={styles.notificationsParent}>
        <Text style={styles.notifications}>Notifications</Text>
        <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.instanceIcon}
          contentFit="cover"
          source={require("../assets/1987-instance1.png")}
        />
        </Pressable>
      </View>

{/* ************************************Notifications Card**************************************************************** */}
<SectionCard name="Abhishek" date="25th December, 2023" time="6.30 PM" />

    </View>
  );
};


{/* ************************************Styling**************************************************************** */}
const styles = StyleSheet.create({
  notifications: {
    marginLeft: -57.5,
    top: 15,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  instanceIcon: {
    top: 14,
    left: 22,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  notificationsParent: {
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
    width: 393,
    height: 52,
    position: "absolute",
  },
  Notifications: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    top: 35,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});



export default Notifications;
