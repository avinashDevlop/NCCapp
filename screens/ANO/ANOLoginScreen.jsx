import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AssociateNCCOfficerLogin = ({ navigation }) => {
  const [nccDirectorate, setNccDirectorate] = useState("");
  const [commissionNumber, setCommissionNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Default admin credentials
  const defaultUsername = "admin";
  const defaultPassword = "123";

  const handleLogin = () => {
    if (nccDirectorate === defaultUsername && commissionNumber === defaultPassword) {
      navigation.navigate('ANOHome');
      setNccDirectorate("");
      setCommissionNumber("");
    } else {
      setErrorMessage("Invalid NCC Directorate or Commission Number");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#87CEEB" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Icon */}
          <MaterialCommunityIcons
            name="shield-account"
            size={70}
            color="#ffffff"
            style={styles.icon}
          />

          {/* Title */}
          <Text style={styles.title}>Associate NCC Officer</Text>

          {/* Error Message */}
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          {/* NCC Directorate Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter NCC Directorate"
            placeholderTextColor="#888"
            value={nccDirectorate}
            onChangeText={setNccDirectorate}
          />

          {/* NCC Commission Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter NCC Commission Number"
            placeholderTextColor="#888"
            value={commissionNumber}
            onChangeText={setCommissionNumber}
            keyboardType="default"
            secureTextEntry
          />

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff6db",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  loginButton: {
    width: "50%",
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AssociateNCCOfficerLogin;
