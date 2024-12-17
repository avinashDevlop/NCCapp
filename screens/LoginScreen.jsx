import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Select your option</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={[styles.loginOption, styles.commandOfficer]}
          onPress={() => navigation.navigate("COLogin")}
        >
          <MaterialCommunityIcons name="account-star" size={32} color="#fff" />
          <Text style={styles.text}>COMMANDING OFFICER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginOption, styles.associateOfficer]}
          onPress={() => navigation.navigate("ANOLogin")}
        >
          <MaterialCommunityIcons name="shield-account" size={32} color="#fff" />
          <Text style={styles.text}>ASSOCIATE NCC OFFICER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginOption, styles.cadet]}
          onPress={() => navigation.navigate("CadetLogin")}
        >
          <MaterialCommunityIcons name="school" size={32} color="#fff" />
          <Text style={styles.text}>CADET</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
 },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 24,
    textAlign: "center",
  },
  contentContainer: {
    width: width * 0.85,
    maxWidth: 380,
    alignItems: "center",
  },
  loginOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  commandOfficer: {
    backgroundColor: "#ff4d4d",
  },
  associateOfficer: {
    backgroundColor: "#4caf50",
  },
  cadet: {
    backgroundColor: "#2196f3",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    letterSpacing: 0.4,
  },
});

export default LoginScreen;
