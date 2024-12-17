import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

const SongScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  const [isHindi, setIsHindi] = useState(true); // Toggle for language

  const lyricsHindi = `
हम सब भारतीय हैं, हम सब भारतीय हैं.
  
अपनी मंज़िल एक है, हा हा हा एक है, हो हो हो एक है.

हम सब भारतीय हैं. 

कश्मीर की धरती रानी है, सरताज हिमालय है, 

सदियों से हमने इस को अपने खून से पाला है. 

देश की रक्षा की खातिर हम शमशीर उठा लेंगे, 

हम शमशीर उठा लेंगे.

बिखरे-बिखरे तारे हैं हम, लेकिन झिलमिल एक है, 

हा हा हा एक है, हो हो हो एक है, 

हम सब भारतीय है. 

मंदिर, गुरूद्वारे भी हैं यहाँ, और मस्जिद भी है यहाँ, 

गिरिजा का है घड़ियाल कहीं मुल्ला की कहीं है अजां 

एक ही अपना राम हैं, एक ही अल्लाह ताला है, 

एक ही अल्लाह ताला हैं. 

रंग बिरंगे दीपक हैं हम, लेकिन जगमग एक है, 

हा हा हा एक है, हो हो हो एक है. 

हम सब भारतीय हैं, हम सब भारतीय हैं`;

  const lyricsEnglish = `
Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.

Apni Manzil Ek Hai, Ha, Ha, Ha, Ek Hai, Ho, Ho, Ho, Ek Hai.

Hum Sab Bharatiya Hain.

Kashmir Ki Dharti Rani Hai, Sartaj Himalaya Hai,

Saadiyon Se Humne Isko Apne Khoon Se Pala Hai.

Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,

Hum Shamshir Utha Lenge.

Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,

Ha, Ha, Ha, Ek Hai, Ho, Ho, Ho, Ek Hai,

Hum Sab Bharatiya Hai.

Mandir Gurudwaare Bhi Hain Yahan Aur Masjid Bhi Hai Yahan,

Girija Ka Hai Ghariyaal Kahin Mullah Ki Kahin Hai Ajaan.

Ek Hee Apna Ram Hain, Ek Hee Allah Taala Hai,

Ek Hee Allah Taala Hain, Rang Birange Deepak Hain Hum,

Lekin Jagmag Ek Hai, Ha, Ha, Ha, Ek Hai, Ho, Ho, Ho, Ek Hai.

Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.`;

  const loadAudio = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('../assets/song/nccSong.mp3'), // Replace with your song path
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPlaybackPosition(status.positionMillis);
      setPlaybackDuration(status.durationMillis);

      if (status.didJustFinish) {
        setIsPlaying(false);
        setPlaybackPosition(0);
        if (sound) {
          sound.stopAsync();
        }
      }
    }
  };

  const playPauseHandler = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        if (playbackPosition >= playbackDuration) {
          await sound.setPositionAsync(0); // Reset playback position to start
        }
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      loadAudio();
    }
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (sound) {
          sound.getStatusAsync().then((status) => {
            if (status.isLoaded) {
              setPlaybackPosition(status.positionMillis);
              setPlaybackDuration(status.durationMillis);
            }
          });
        }
      }, 500);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (sound) {
          sound
            .stopAsync()
            .then(() => sound.unloadAsync())
            .catch((error) => console.error('Error stopping or unloading sound:', error));
          setIsPlaying(false);
        }
      };
    }, [sound])
  );

  useEffect(() => {
    return () => {
      if (sound) {
        sound
          .unloadAsync()
          .catch((error) => console.error('Error unloading sound:', error));
      }
    };
  }, [sound]);

  const toggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lyricsSection}>
        <ScrollView
          style={styles.lyricsContainer}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.lyrics}>{isHindi ? lyricsHindi : lyricsEnglish}</Text>
        </ScrollView>

        <TouchableOpacity onPress={toggleLanguage} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            Switch to {isHindi ? 'English' : 'Hindi'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timeline}>
        <Text style={styles.time}>{formatTime(playbackPosition)}</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              {
                width: playbackDuration
                  ? `${(playbackPosition / playbackDuration) * 100}%`
                  : '0%',
              },
            ]}
          />
        </View>
        <Text style={styles.time}>{formatTime(playbackDuration)}</Text>
      </View>

      <TouchableOpacity onPress={playPauseHandler} style={styles.button}>
        <Icon
          name={isPlaying ? 'pause' : 'play'}
          size={20}
          color="#fff"
        />
        <Text style={styles.buttonText}>
          {isPlaying ? ' Pause' : ' Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001F3F',
    padding: 20,
    justifyContent: 'space-between',
  },
  lyricsSection: {
    flex: 1,
    marginBottom: 20,
  },
  lyricsContainer: {
    flex: 1,
    backgroundColor: '#008000',
    padding: 15,
    paddingTop: 0,
    borderRadius: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  lyrics: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  toggleButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#444444',
    borderRadius: 2,
    marginHorizontal: 10,
  },
  progress: {
    height: 4,
    backgroundColor: '#FF0000',
    borderRadius: 2,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SongScreen;
