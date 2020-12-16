import React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

import { Header, SearchBar } from "react-native-elements";

import {MyCourseCard} from "../component/course-card";

const MyCoursesScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Header
        placement="left"
        centerComponent={{
          text: "My Courses",
          style: { color: "#fff", fontWeight: "bold", fontSize: 20 },
        }}
      />
      <CustomSearchBar />
      <MyCourseCard/>
    </ScrollView>
  );
};

const CustomSearchBar = () => {
  if (Platform.OS != "android" || Platform.OS != "ios") {
    return (
      <SearchBar
        placeholder="Search your course here ..."
        platform={Platform.OS}
        lightTheme={true}
        round={true}
      />
    );
  }
  return <SearchBar placeholder="Search your course here ..." />;
};

export default MyCoursesScreen;
