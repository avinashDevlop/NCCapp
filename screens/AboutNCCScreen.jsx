import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import NCCflag from "../assets/nccFlag.png";
import NCCdrill from "../assets/NCCdrill.jpg";
import unityAndDiscipline from "../assets/unityAndDiscipline.jpg";
import historyNcc from "../assets/historyNcc.webp";

// Get the screen width
const screenWidth = Dimensions.get('window').width;

const AboutNCC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>National Cadet Corps</Text>

      {/* Drill Image */}
      <View>
        <Image source={NCCdrill} style={styles.drillImage} />
      </View>

      {/* Content */}
      <Text style={styles.content}>
        The National Cadet Corps (NCC) is the Indian military cadet corps with its headquarters in New Delhi. 
        It is open to school and college students on a voluntary basis. The NCC recruits cadets from high schools, 
        colleges, and universities across India. Cadets are provided basic military training in small arms and parades. 
        Although NCC cadets and officers have no liability for active military service after completing their course, 
        they are given preference during selections based on their achievements in the corps.
      </Text>

      {/* Motto */}
      <Text style={styles.subtitle}>Motto of NCC</Text>
      <View>
        <Image source={unityAndDiscipline} style={styles.unityAndDisciplineImage} />
      </View>
      <Text style={styles.content}>"Unity and Discipline (Ekta aur Anushasan)"</Text>

      {/* Cardinal Principles */}
      <Text style={styles.subtitle}>DG's Four Cardinal Principles of Discipline</Text>
      <Text style={styles.content}>
        - Obey with a smile{'\n'}
        - Be punctual{'\n'}
        - Work hard without fuss{'\n'}
        - Make no excuses and tell no lies
      </Text>

      {/* Aims of NCC */}
      <Text style={styles.subtitle}>Aims of NCC</Text>
      <Text style={styles.content}>
        1. To develop qualities of character, courage, discipline, leadership, and a spirit of adventure among youth.{'\n'}
        2. To create a motivated youth resource to provide leadership in all walks of life, including the Armed Forces.
      </Text>

      {/* Oath */}
      <Text style={styles.subtitle}>Oath</Text>
      <Text style={styles.content}>
        "I do hereby solemnly promise that I will serve my motherland most truly and loyally and that, I will abide 
        by the rules and regulations of the National Cadet Corps. Further, under the command and control of my 
        commanding officer, I will participate in every camp most sincerely and wholeheartedly."
      </Text>

      {/* Pledge */}
      <Text style={styles.subtitle}>Pledge</Text>
      <Text style={styles.content}>
        "We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity of India. 
        We resolve to be disciplined and responsible citizens of our nation. We shall undertake positive community service 
        in the spirit of selflessness and concern for our fellow beings."
      </Text>

      {/* NCC Flag */}
      <Text style={styles.subtitle}>NCC Flag</Text>
      <View>
        <Image source={NCCflag} style={styles.logoImage} />
      </View>
      <Text style={styles.content}>
        The NCC Flag contains the NCC Crest in gold in the middle, with the letters "NCC" encircled by a wreath of 
        seventeen lotuses with a background in red, blue, and light blue. Red depicts the Army, deep blue depicts the Navy, 
        and light blue depicts the Air Force. The seventeen lotuses represent the 17 State Directorates. 
        "Unity of Discipline" (Ekta aur Anushasan)" is written at the bottom of the NCC Flag.
      </Text>

      {/* Centrally Organized Camps */}
      <Text style={styles.subtitle}>Centrally Organized Camps</Text>
      <Text style={styles.content}>
        - Leadership Camp{'\n'}
        - Vayu Sainik Camp{'\n'}
        - Nau Sainik Camp{'\n'}
        - Rock Climbing Camp{'\n'}
        - Trekking Camp{'\n'}
        - National Integration Camp (NIC){'\n'}
        - Thal Sainik Camp (TSC){'\n'}
        - Army Attachment Camp (AAC){'\n'}
        - Airforce Attachment Camp (AAC){'\n'}
        - Republic Day Camp (RDC){'\n'}
        - Annual Training Camp (ATC)
      </Text>

      {/* History */}
      <Text style={styles.subtitle}>NCC History</Text>
      <View>
        <Image source={historyNcc} style={styles.drillImage} />
      </View>
      <Text style={styles.content}>
        The NCC in India was formed under the National Cadet Corps Act of 1948 and was officially established on 
        15 July 1948. It is a successor to the University Officers Training Corps (UOTC), established in 1942 by the British. 
        The NCC has played key roles in national defense during the 1965 and 1971 wars, and its syllabus now emphasizes 
        leadership, social service, and youth management in addition to military training.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#87CEEB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#3b5998',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#555',
  },
  logoImage: {
    width: 200,
    height: 175,
    alignSelf: 'center',
    marginVertical: 16,
  },
  drillImage: {
    width: screenWidth * 0.9, // Set width to 90% of the screen width
    height: (screenWidth * 0.7) * 0.72,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3b5998',
  },
  unityAndDisciplineImage: {
    width: screenWidth * 0.8, // Set width to 90% of the screen width
    height: (screenWidth * 0.6) * 0.72,
    resizeMode: 'contain', // Ensures the image retains its aspect ratio
    marginVertical: 16, // Adds spacing above and below the image
    alignSelf: 'center', // Centers the image horizontally
  },  
});

export default AboutNCC;
