import React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Header, Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {
  CourseCardHorizontal,
  CourseCardVertical,
} from "../component/course-card";

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
      <View
        style={{
          backgroundColor: "white",
          marginVertical: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, paddingLeft: 20 }}>Top Courses</Text>
        <View>
          <CourseCardVertical />
          <CourseCardVertical />
          <CourseCardVertical />
          <CourseCardVertical />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginVertical: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, paddingLeft: 20 }}>
          Data Science Courses
        </Text>
        <ScrollView horizontal={true}>
          <CourseCardHorizontal />
          <CourseCardHorizontal />
          <CourseCardHorizontal />
          <CourseCardHorizontal />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
