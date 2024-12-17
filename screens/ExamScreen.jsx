import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const nccExams = [
  { id: '1', name: 'Certificate A Exam', icon: 'book' },
  { id: '2', name: 'Certificate B Exam', icon: 'graduation-cap' },
  { id: '3', name: 'Certificate C Exam', icon: 'certificate' },
  { id: '4', name: 'Special NCC Quiz', icon: 'question-circle' },
];

const NCCExamListScreen = () => {
  const handleExamPress = (examName) => {
    console.log(`You selected ${examName}`);
    // Add your logic for navigation or displaying the exam details here
  };

  return (
    <View style={styles.container}>
      {nccExams.map((exam) => (
        <TouchableOpacity
          key={exam.id}
          style={styles.button}
          onPress={() => handleExamPress(exam.name)}
        >
          <View style={styles.buttonContent}>
            <FontAwesome name={exam.icon} size={24} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>{exam.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#0B3D91',
    paddingVertical: 25,
    marginVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 22,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default NCCExamListScreen;
