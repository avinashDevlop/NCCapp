import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Training Screen</Text>
      {/* Add more content for the training screen here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light background color
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default TrainingScreen;
