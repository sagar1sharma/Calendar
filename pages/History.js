import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import HistoryCard from "../components/HistoryCard";

const History = () => {
  return (
      <>
        <HistoryCard day = "Sat" date = "6 Dec 2023" name = "Abhishek" time = "6.30 PM" />
      </>
  );
};


export default History;
