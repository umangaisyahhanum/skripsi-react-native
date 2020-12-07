import React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Header, Card } from "react-native-elements";
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
      <View style={{ backgroundColor: "white", marginVertical: 10 }}>
        <Text style={{ fontSize: 20 , paddingLeft:20, paddingVertical:10}}>Data Science Courses</Text>
        <ScrollView
          horizontal={true}
          style={{
            paddingVertical: 5,
          }}
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const CourseCard = () => {
  return (
    <Card>
      <Card.Image
        source={{
          uri:
            "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/when-to-use-data-science-in-seo-5def8e5b1c22c-760x400.png",
        }}
        style={{ resizeMode: "contain" }}
      />
      <Card.Title>Data Science With Python</Card.Title>
    </Card>
  );
};

export default HomeScreen;
