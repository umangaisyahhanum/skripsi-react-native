import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", padding: 20, marginBottom: 10 }}>
        <Image
          source={require("../../assets/simplilearn-logo.png")}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            width: 200,
            height: 50,
            margin: 20,
          }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Umang Aisyah</Text>
          <Text style={{ fontWeight: "bold" }}>example@gmail.com</Text>
        </View>
      </View>
      <View>
        <ListItem>
          <Ionicons
            name={(Platform.OS === "ios" ? "ios" : "md") + "-" + "log-out"}
          />
          <ListItem.Content>
            <Text>Log Out</Text>
          </ListItem.Content>
        </ListItem>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
