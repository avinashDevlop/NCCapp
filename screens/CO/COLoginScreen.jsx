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

const CommandingOfficerLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Default admin credentials
  const defaultAdmin = {
    username: "admin",
    password: "admin",
  };

  const handleLogin = () => {
    if (username === defaultAdmin.username && password === defaultAdmin.password) {
      navigation.navigate('COHome');
      setUsername("");
      setPassword("");
    } else {
      Alert.alert("Error", "Invalid username or password. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Icon */}
          <MaterialCommunityIcons
            name="account-star"
            size={70}
            color="#ffffff"
            style={styles.icon}
          />
          {/* Title */}
          <Text style={styles.title}>Commanding Officer</Text>

          {/* Username Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              placeholderTextColor="#888"
              value={password}
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#555"
              />
            </TouchableOpacity>
          </View>

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
    flex: 1,
    backgroundColor: "#87CEEB", // Sky blue background
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    alignSelf: "center", // Center the icon horizontally
    marginBottom: 10, // Space below the icon
    backgroundColor: "#ff4d4d", // Optional: Add a background for the icon
    padding: 15, // Padding around the icon
    borderRadius: 50, // Make the icon background circular
    borderWidth: 2, // Optional: Add a border around the icon
    borderColor: "#fff", // Border color
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#fff6db",
    borderRadius: 15, // Border radius applied only to the form
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  showPasswordButton: {
    paddingHorizontal: 12,
  },
  loginButton: {
    width: "50%",
    backgroundColor: "#ff4d4d", // Red button
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CommandingOfficerLogin;
