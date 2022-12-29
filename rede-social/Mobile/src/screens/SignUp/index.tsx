import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import api from '../../services/api'
import { Auth, AuthForm } from '../../components/AuthForm'
import { styles } from './styles'

interface SignUpProps {
  navigation: NativeStackNavigationProp<any, any>
}

export function SignUp({ navigation }: SignUpProps) {

  function handleLoginClick() {
    navigation.navigate("Login")
  }

  async function handleSignUp(auth: Auth){
    try {
      await api.post('/security/register', auth)
      navigation.navigate("Login")
    } catch (err) {
      console.error(err)
    }
  }

  return(
    <>
    <AuthForm 
      formTitle='Cadastre-se e começe a usar!'
      submitFormButtonText='Cadastrar'
      submitFormButtonAction={handleSignUp}

    />
    <TouchableOpacity onPress={handleLoginClick}>
      <Text style={styles.link}>Já possui conta? Entre agora!</Text>
  </TouchableOpacity>
  </>
  )
}

