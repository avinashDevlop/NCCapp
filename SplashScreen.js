import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

const SplashScreen = ({ navigation }) => {
  // Shared values for animation
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);

  useEffect(() => {
    // Logo animation: scaling up with a bounce and opacity fade-in
    logoOpacity.value = withTiming(1, { duration: 1000 });
    logoScale.value = withSequence(
      withTiming(1.2, { duration: 1000, easing: Easing.out(Easing.exp) }),
      withSpring(1, { damping: 5, stiffness: 80 })
    );

    // Navigate to HomeScreen after the animation ends
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigation]);

  // Animated styles
  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedLogoStyle]}>
        <Image source={require('./assets/nccFlag.png')} style={styles.logo} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
