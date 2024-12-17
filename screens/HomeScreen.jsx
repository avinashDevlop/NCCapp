import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import NCCflag from "../assets/nccFlag.png"
import govtAP from "../assets/govtAP.png";
import group0 from "../assets/group0.1.jpg";
import group1 from "../assets/grouphoto1.png";
import group3 from "../assets/group3.jpg";
import group4 from "../assets/group4.jpg";
import group5 from "../assets/group5.jpg";
import { Marquee } from "@animatereactnative/marquee";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use a suitable icon library

const HomeScreen = ({ navigation }) => {

  const menuItems = [
    { label: 'About NCC', icon: 'shield-outline', screen: 'About NCC' },
    { label: 'Song', icon: 'music-note', screen: 'NCC Song' },
    { label: 'Exam', icon: 'book-open-variant', screen: 'Exams' },
    { label: 'Training Modules', icon: 'account-multiple', screen: 'Training' },
    { label: 'Achievements', icon: 'trophy-outline',screen: 'Achievements' },
    { label: 'Gallery', icon: 'image',screen: 'Gallery' },
    { label: 'Queries', icon: 'help-circle-outline',screen: 'Queries' },
    { label: 'Suggestions', icon: 'email',screen: 'Suggestions' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const images = [group0, group1, group3, group4, group5];
  const screenWidth = Dimensions.get("window").width;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: screenWidth * nextIndex, animated: true });
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, screenWidth]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewWidth = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(contentOffsetX / viewWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={NCCflag} style={styles.logoImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>13 ANDHRA BATALLION</Text>
          <Text style={styles.headerText}>NCC</Text>
          <Text style={styles.headerText}>VISAKHAPATNAM</Text>
        </View>
        <Image source={govtAP} style={styles.logoImage} />
      </View>
      <ScrollView>
      <View> 
        <Marquee spacing={20} speed={1} style={styles.marquee}>
          <Text style={styles.marqueeText}>
            Welcome Cadets to our 13 (A) Battalion National Cadet Corps VSP
          </Text>
        </Marquee>
      </View>
      <View style={styles.unityContainer}>
        <Text style={styles.unityText}>Unity and Discipline</Text>
      </View>
      {/* Image Slider */}
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.sliderImage} />
          ))}
        </ScrollView>
        {/* Indicator Container Positioned at the Bottom */}
        <View style={styles.indicatorContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
              ]}
            />
          ))}
        </View>
        <View>
        </View>
      </View>
      <View style={styles.visionContainer}>
        <Text style={styles.visionHeader}>Vision</Text>
        <Text style={styles.visionText}>
          Empower volunteer youth to become potential leaders and responsible citizens of the country.
        </Text>
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => navigation.navigate(item.screen)} // Navigate to the screen
          >
            <Icon name={item.icon} size={40} color="#fff" />
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.loginButtonText}>LOGIN</Text>
    </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
  },
  header: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
    backgroundColor: "#000080",
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  headerTextContainer: {
    alignItems: "center",
    flex: 1,
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFD700",
  },
  marquee: {
    backgroundColor: "#00aeef",
    paddingVertical: 10,
  },
  marqueeText: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  unityContainer: {
    backgroundColor: "#D0EFFF", // Softer light blue
    paddingVertical: 10, // Slightly increased for better spacing
    marginTop: 25,
    marginHorizontal: 10, // Adjusted for balanced layout
    borderRadius: 15, // More rounded corners for elegance
    borderWidth: 2, // Added a border for a polished look
    borderColor: "#87CEEB", // Matching soft blue border
    alignItems: "center",
    shadowColor: "#000", // Added shadow for depth
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // Elevation for Android shadow effect
  },
  unityText: {
    color: "#1C1C1C", // Changed to a dark neutral gray for contrast
    fontSize: 25, // Slightly increased font size
    fontWeight: "500", // Bolder for emphasis
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1, // Added letter spacing for better readability
  },
  sliderContainer: {
    marginTop: 25,
    height: 300,
    position: "relative", // To position indicators relative to slider
  },
  scrollView: {
    flex: 1,
  },
  sliderImage: {
    width: Dimensions.get("window").width, // Full width for slider images
    height: 300,
    resizeMode: "cover",
    borderWidth: 2, // Add border width
    borderColor: "#FFD700",
    borderRadius: 5,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#FFD700",
  },
  inactiveIndicator: {
    backgroundColor: "#ccc",
  },
  visionContainer: {
    backgroundColor: "#F5FFF5", // Light cream background
    padding: 20, // Padding around the container
    marginHorizontal: 15, // Margins on the sides
    marginTop: 25, // Top margin for spacing
    borderRadius: 15, // Rounded corners
    borderColor: "#FFD700", // Golden border
    borderWidth: 3, // Thickness of the border
    alignItems: "center", // Center-align content inside
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 3 }, // Shadow position
    shadowOpacity: 0.3, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 6, // Elevation for Android
  },
  visionHeader: {
    fontSize: 24, // Large font size for the header
    fontWeight: "bold", // Bold font for emphasis
    color: "#8B4513", // Dark brown text color
    marginBottom: 10, // Space between header and text
    textAlign: "center", // Centered header
    textTransform: "uppercase", // Uppercase for a formal look
  },
  visionText: {
    color: "#8B4513", // Dark brown text color
    fontSize: 18, // Font size for the main text
    fontWeight: "600", // Semi-bold for emphasis
    textAlign: "center", // Centered text
    fontStyle: "italic", // Italic for distinction
    lineHeight: 27, // Line height for readability
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    backgroundColor: '#0B3D91',
    width: '40%',
    height: 120,
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6, // For Android shadow effect
  },
  menuItemText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#FF0000',
    width: '70%',
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
    marginBottom:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
