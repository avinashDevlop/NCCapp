import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Comprehensive FAQ list
const faqs = [
  { question: "What is National Cadet Corps?", answer: "The National Cadet Corps (NCC) is a youth development movement. It provides opportunities for the youth's all-around development and inculcates values of duty, commitment, discipline, and moral values." },
  { question: "When did National Cadet Corps come into existence?", answer: "The National Cadets Corps came into existence under the NCC Act XXXI of 1948, which was passed in April 1948 and became effective on 16th July 1948." },
  { question: "What is the nature of the NCC Programme, whether compulsory or voluntary?", answer: "Voluntary." },
  { question: "Is the NCC Programme part of the Educational activity or is it a part of military activity?", answer: "Educational Activity." },
  { question: "What is/are the Aim(s) of NCC?", answer: "To develop character, leadership, discipline, a secular outlook, and ideals of selfless service among youth, create a trained and motivated human resource, and provide a suitable environment to encourage youth to join the Armed Forces." },
  { question: "What is the Motto of NCC?", answer: "Unity and Discipline." },
  { question: "What is the NCC symbol/insignia?", answer: "The NCC Crest in gold in the middle, with the letters 'NCC', encircled by a wreath of seventeen lotus flowers with a background in Red, Blue, and Light Blue." },
  { question: "What does the colour Red depict in the NCC Crest?", answer: "Red depicts the Army." },
  { question: "What do the colours Dark Blue and Light blue in the NCC Crest depict?", answer: "Dark Blue depicts the Navy, and Light Blue depicts the Air Force." },
  { question: "What do the Lotus flowers depict in the NCC Crest?", answer: "The seventeen lotus flowers represent the 17 State Directorates." },
  { question: "When is the NCC Day observed?", answer: "The NCC Day is observed on the fourth Sunday of November." },
  { question: "Which Ministry at the National level deals with NCC?", answer: "The Ministry of Defence." },
  { question: "Which Ministry deals with NCC in all States?", answer: "The Ministry of Education." },
  { question: "What are the arrangements for Finances/Funds for NCC?", answer: "The funds are shared by the Central and State Governments." },
  { question: "What is Directorate General NCC?", answer: "It is the national-level HQ located in New Delhi." },
  { question: "What is the age limit for a student to join NCC?", answer: "For JD/JW Cadets: 12–18.5 years; For SD/SW Cadets: Up to 26 years." },
  { question: "What is the duration of the NCC Programme as an NCC Cadet?", answer: "For JD/JW Cadets: Two years. For SD/SW Cadets: Three years with a one-year extension." },
  { question: "Is it compulsory to wear NCC uniform?", answer: "Yes." },
  { question: "What are the various types of Camps in NCC?", answer: "Annual Training Camp (ATC), Centrally Organized Camps (COC) such as Leadership Camps, Vayu Sainik Camp, Nau Sainik Camp, Rock Climbing Camps, National Integration Camps (NIC), and Thal Sainik Camps (TSC)." },
  { question: "How can I participate in the Republic Day Parade at Rajpath in New Delhi?", answer: "Be selected as a member of the Directorate contingent for the Republic Day Camp at Delhi." },
  { question: "Are NCC cadets exposed to work in natural disasters and calamities?", answer: "Yes, with the permission of cadets' parents." },
  { question: "Is it compulsory to attend NCC Camps?", answer: "Yes." },
  { question: "What are the different Certificates earned in NCC?", answer: "JD/JW Cadets earn 'A' Certificate, and SD/SW Cadets earn 'B' and 'C' Certificates." },
  { question: "Are NCC cadets required to join the Armed Forces after completing NCC?", answer: "No." },
  { question: "Can NCC cadets participate in social services like tree plantation and blood donation?", answer: "Yes, participation is encouraged, but it is not mandatory." },
  { question: "What type of training is given to NCC cadets?", answer: "Training includes Institutional Training, Camp Training, Air Wing Training, Naval Wing Training, Adventure Activities, and Social Services." },
  { question: "How does NCC help in personality development?", answer: "NCC instills leadership, discipline, self-confidence, and a sense of duty through diverse training and activities." },
  { question: "Can NCC cadets meet eminent personalities during their tenure?", answer: "Yes, they get opportunities during events, camps, and Republic Day celebrations." }
];

const QueriesScreen = () => {
  const [expanded, setExpanded] = useState(null);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleSendQuestion = () => {
    if (!email.trim()) {
      alert("Please enter a valid email address!");
      return;
    }

    if (!question.trim()) {
      alert("Please enter a valid question!");
      return;
    }

    alert(`Question submitted:\nEmail: ${email}\nQuestion: ${question}`);
    setQuestion(""); // Clear the text box after submission
    setEmail(""); // Clear the email field after submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Question Input Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Your Email:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email here..."
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.inputLabel}>Enter Your Question:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Write your question here..."
          value={question}
          onChangeText={setQuestion}
          multiline={true}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendQuestion}>
          <Text style={styles.sendButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Frequently Asked Questions</Text>

      {/* FAQ Section */}
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity
            style={styles.questionContainer}
            onPress={() => toggleExpand(index)}
          >
            <Text style={styles.question}>{faq.question}</Text>
            <FontAwesome
              name={expanded === index ? "chevron-up" : "chevron-down"}
              size={18}
              color="#555"
            />
          </TouchableOpacity>
          {expanded === index && (
            <Text style={styles.answer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#87CEEB",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: "#F7F9FB",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderColor: "#B0C4DE",
    borderWidth: 1,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A52BE",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ADD8E6",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    minHeight: 40,
    textAlignVertical: "top",
  },
  sendButton: {
    marginTop: 12,
    backgroundColor: "#008080",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  faqContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#FAFAD2",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderColor: "#FFD700",
    borderWidth: 1,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8B0000",
  },
  answer: {
    fontSize: 16,
    color: "#4B0082",
    marginTop: 8,
    lineHeight: 22,
  },
});

export default QueriesScreen;
