import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const SuggestionsScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F5F8FA" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.header}>We Value Your Suggestions</Text>
        <Text style={styles.subHeader}>
          Help us enhance our services by sharing your valuable feedback!
        </Text>

        {/* Suggestion Input */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Your Suggestion:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Write your suggestion here..."
            multiline={true}
            textAlignVertical="top"
          />

          {/* Email Input */}
          <Text style={styles.label}>Your Email (Optional):</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email here..."
            keyboardType="email-address"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          Thank you for helping us improve. Your feedback matters!
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F5F8FA", // Soft, neutral background
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#003366", // Dark blue for emphasis
    textAlign: "center",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: "#4F4F4F", // Neutral gray for readability
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  inputSection: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF", // White card-like background
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for shadow on Android
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2A7A89", // Calm teal for labels
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#D1D9E0", // Light gray for input borders
    borderRadius: 8,
    backgroundColor: "#FAFAFA", // Slightly off-white for contrast
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    minHeight: 80,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#2A7A89", // Teal green for the button
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#FFFFFF", // White for button text
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  footerText: {
    fontSize: 14,
    color: "#6D6D6D", // Subtle gray for footer
    textAlign: "center",
    marginTop: 20,
    lineHeight: 20,
  },
});

export default SuggestionsScreen;
