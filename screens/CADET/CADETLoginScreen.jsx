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

const CadetLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Default login credentials
  const defaultUsername = "admin";
  const defaultPassword = "admin";

  // Function to handle login
  const handleLogin = () => {
    if (username === defaultUsername && password === defaultPassword) {
      navigation.navigate('CadetHome');
      setUsername("");
      setPassword("");
    } else {
      Alert.alert("Login Failed", "Incorrect username or password");
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
            name="school"
            size={70}
            color="#ffffff"
            style={styles.icon}
          />

          {/* Title */}
          <Text style={styles.title}>Cadet Login</Text>

          {/* Username Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Password"
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
                size={24}
                color="#333"
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#2196f3", // Blue for icon background
    padding: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff6db", // Light gold background
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
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
    padding: 12,
  },
  loginButton: {
    width: "50%",
    backgroundColor: "#2196f3", // Blue shade for cadet
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center", // Center the button horizontally
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CadetLogin;
