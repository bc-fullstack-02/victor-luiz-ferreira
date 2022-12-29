import { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black }
 from '@expo-google-fonts/inter';

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'

import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';
import { Friends } from './src/screens/Friends';

import React from 'react';
import { StatusBar } from 'react-native';
import { THEME } from './src/theme';


function App() {
  const { token } = useContext(AuthContext)

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  })


  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator()


  return (
    <SafeAreaProvider>
      { fontsLoaded ? (
        <Background>
        <StatusBar
          barStyle="dark-content"
          backgroundColor='transparent'
          translucent
        />
        <NavigationContainer>
          {!token ? (
          <Stack.Navigator 
              screenOptions={{
                headerShown: false,
                contentStyle: { 
                  backgroundColor: THEME.COLORS.BACKGROUND_900,
                  flex: 1,
                 },
  
                 /* Tentei usar o statusBarStyle, porem como estou 
                 fazendo no MacOS emulando um IPhone, 
                 da um erro de UIView, dai preferi
                 usar o <StatusBar /> acima. */
  
                 /*statusBarStyle: "dark"*/
  
              }}
            >
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
          ) : (
          <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Friends' component={Friends} />
            <Tab.Screen name='Profile' component={Profile} />
          </Tab.Navigator>
          )}
        </NavigationContainer>
        </Background>
      ) : (
      <Loading/> 
    )}
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}