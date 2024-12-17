import React,{useEffect} from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SongScreen from './screens/SongScreen';
import AboutNCCScreen from './screens/AboutNCCScreen';
import ExamScreen from './screens/ExamScreen';
import TrainingScreen from './screens/TrainingScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import GalleryScreen from './screens/GalleryScreen';
import QueriesScreen from './screens/QueriesScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import LoginScreen from './screens/LoginScreen';
//CO
import CommandingOfficerLogin from './screens/CO/COLoginScreen';
import COHome from './screens/CO/COHomeScreen';
//ANO
import ANOLoginScreen from './screens/ANO/ANOLoginScreen';
import ANOHome from './screens/ANO/ANOHomeScreen';
//CADET
import CadetLogin from './screens/CADET/CADETLoginScreen';
import CadetHome from './screens/CADET/CADETHomeScreen';
const Stack = createStackNavigator();

// Common transition settings
const createTransition = (direction) => ({
  transitionSpec: {
    open: { animation: 'timing', config: { duration: 200 } },
    close: { animation: 'timing', config: { duration: 200 } },
  },
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: direction === 'left'
              ? [-layouts.screen.width, 0]
              : [layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
});

// Common header options
const headerOptions = {
  headerStyle: { backgroundColor: '#000080' }, // Navy blue color
  headerTintColor: '#fff', // White color for header text
  headerShown: true,
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF0000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen" 
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NCC Song"
            component={SongScreen}
            options={{
              ...headerOptions,
              ...createTransition('right'),
            }}
          />
          <Stack.Screen
            name="About NCC"
            component={AboutNCCScreen}
            options={{
              ...headerOptions,
              ...createTransition('left'),
            }}
          />
          <Stack.Screen
            name="Exams"
            component={ExamScreen}
            options={{
              ...headerOptions,
              ...createTransition('left'),
            }}
          />
          <Stack.Screen
            name="Training"
            component={TrainingScreen}
            options={{
              ...headerOptions,
              ...createTransition('right'),
            }}
          />
          <Stack.Screen
            name="Achievements"
            component={AchievementsScreen}
            options={{
              ...headerOptions,
              ...createTransition('left'),
            }}
          />
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{
              ...headerOptions,
              ...createTransition('right'),
            }}
          />
          <Stack.Screen
            name="Queries"
            component={QueriesScreen}
            options={{
              ...headerOptions,
              ...createTransition('left'),
            }}
          />
          <Stack.Screen
            name="Suggestions"
            component={SuggestionsScreen}
            options={{
              ...headerOptions,
              ...createTransition('right'),
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              ...headerOptions,
              transitionSpec: {
                open: { animation: 'timing', config: { duration: 200 } },
                close: { animation: 'timing', config: { duration: 200 } },
              },
              cardStyleInterpolator: ({ current, layouts }) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateY: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.height, 0], // Slide up from bottom
                        }),
                      },
                    ],
                  },
                };
              },
            }}
          />
          {/* CO */}
          <Stack.Screen
            name="COLogin"
            component={CommandingOfficerLogin}
            options={{
              ...headerOptions,
              title: "CO Login",
            }}
          />
          <Stack.Screen
            name="COHome"
            component={COHome}
            options={{
              ...headerOptions,
              title: "CO Home",
            }}
          />
          
          {/* ANO */}
          <Stack.Screen
            name="ANOLogin"
            component={ANOLoginScreen}
            options={{
              ...headerOptions,
              title: "ANO Login",
            }}
          />
          <Stack.Screen
            name="ANOHome"
            component={ANOHome}
            options={{
              ...headerOptions,
              title: "ANO Home",
            }}
          />
        
          
          {/* cadet */}
          <Stack.Screen
            name="CadetLogin"
            component={CadetLogin}
            options={{
              ...headerOptions,
              title: "Cadet Login",
            }}
          />
          <Stack.Screen
            name="CadetHome"
            component={CadetHome}
            options={{
              ...headerOptions,
              title: "Cadet Home",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
