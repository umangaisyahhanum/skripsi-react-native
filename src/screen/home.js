import React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const RightComponent = () => {
    let prefix = Platform.OS === "ios" ? "ios" : "md";
    return (
      <View style={{ flexDirection: "row", alignContent: "center" }}>
        <Ionicons
          name={`${prefix}-search`}
          style={{ paddingHorizontal: 10, fontSize: 30, color: "white" }}
        />
        <Ionicons
          name={`${prefix}-notifications`}
          style={{ paddingHorizontal: 10, fontSize: 30, color: "white" }}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <Header
        placement={"left"}
        centerComponent={{
          text: "Hi, User!",
          style: { color: "#fff", fontWeight: "bold", fontSize: 20 },
        }}
        rightComponent={<RightComponent />}
      />
    </ScrollView>
  );
};

export default HomeScreen;
