import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AchievementsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Achievements</Text>
      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>Best NCC Cadet Award</Text>
        <Text style={styles.achievementDescription}>
          Awarded for outstanding performance in NCC activities and leadership skills.
        </Text>
      </View>
      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>First Place in Drill Competition</Text>
        <Text style={styles.achievementDescription}>
          Secured the first position in the state-level drill competition, showcasing excellent teamwork and discipline.
        </Text>
      </View>
      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>Community Service Recognition</Text>
        <Text style={styles.achievementDescription}>
          Recognized for contributing over 100 hours of community service as part of NCC's social responsibility.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080', // Navy blue color
    textAlign: 'center',
    marginBottom: 20,
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000080', // Navy blue color
  },
  achievementDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default AchievementsScreen;
