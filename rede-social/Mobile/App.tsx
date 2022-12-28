import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black }
 from '@expo-google-fonts/inter';

import { Login } from './src/screens/Login';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import React from 'react';


export default function App() { 

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  })

  return (
    <SafeAreaProvider>
      { fontsLoaded ? (      
      <Background>
        <Login/>
      </Background>
      ) : 
      
      <Loading/> }
    </SafeAreaProvider>
  );
}

