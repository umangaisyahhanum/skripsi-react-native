import React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar, Colors } from "react-native-paper";

let starIcon = `${Platform.OS === "ios" ? "ios" : "md"}-star`;

export const CourseCardHorizontal = () => {
  return (
    <Card containerStyle={{ padding: 0, borderRadius: 10 }}>
      <Card.Image
        source={{
          uri:
            "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/when-to-use-data-science-in-seo-5def8e5b1c22c-760x400.png",
        }}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <View
        style={{
          padding: 15,
          width: 200,
        }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ color: "gray" }}>DATA SCIENCE</Text>
        </View>
        <Text style={{ fontSize: 20, flexWrap: "wrap"}}>Data Science with Python</Text>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text style={{ color: "gray" }}>4.3</Text>
          <Ionicons
            name={starIcon}
            size={16}
            color={"yellow"}
            style={{ paddingHorizontal: 3 }}
          />
          <Text style={{ color: "gray", paddingHorizontal: 3 }}>⋅</Text>
          <Text style={{ color: "gray" }}>16K learners</Text>
        </View>
      </View>
    </Card>
  );
};

export const CourseCardVertical = () => {
  return (
    <Card containerStyle={{ margin: 10, padding: 15, borderRadius: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "25%" }}>
          <Image
            style={{
              width: 75,
              height: 75,
              borderRadius: 10,
            }}
            source={{
              uri:
                "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/cybersecurity%20security%20infosec%20art%20getty.jpg",
            }}
            resizeMode={"cover"}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "75%",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ color: "gray", paddingBottom: 10 }}>
            CYBER SECURITY
          </Text>
          <Text style={{ fontSize: 20,
            flexWrap: "wrap"}}>Introduction to Cyber Security </Text>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <Text style={{ color: "gray" }}>4.3</Text>
            <Ionicons
              name={starIcon}
              size={16}
              color={"yellow"}
              style={{ paddingHorizontal: 3 }}
            />
            <Text style={{ color: "gray", paddingHorizontal: 3 }}>⋅</Text>
            <Text style={{ color: "gray" }}>16K learners</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export const MyCourseCard = () => {
  return (
    <Card containerStyle={{ margin: 10, padding: 15, borderRadius: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "25%" }}>
          <Image
            style={{
              width: 75,
              height: 75,
              borderRadius: 10,
            }}
            source={{
              uri:
                "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/cybersecurity%20security%20infosec%20art%20getty.jpg",
            }}
            resizeMode={"cover"}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "75%",
            paddingHorizontal: 10,
            paddingBottom: 10
          }}
        >
          <Text style={{ color: "gray", paddingBottom: 10 }}>
            CYBER SECURITY
          </Text>
          <Text style={{ fontSize: 20 , flexWrap: "wrap",}}>Introduction to Cyber Security </Text>
          <View style={{paddingVertical:10}}>
            <ProgressBar progress={0.3} color= {Colors.green500}/>
          </View>
          <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
            <Text>Keep Going</Text>
            <Text style={{color: Colors.grey700}}>30% Completed</Text>
          </View>
            
        </View>
      </View>
      <Card.Divider />
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "blue", fontWeight: "bold" }}>
          Continue Learning
        </Text>
      </View>
    </Card>
  );
};
