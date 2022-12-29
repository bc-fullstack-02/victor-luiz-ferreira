import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Context as AuthContext } from '../../context/AuthContext'
import api from '../../services/api'
import { Auth, AuthForm } from '../../components/AuthForm'
import { styles } from './styles'

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>
}

export function Login({ navigation }: LoginProps) {
  const { login } = useContext(AuthContext)
  function handleRegisterClick() {
    navigation.navigate("SignUp")
  }

  return(
    <>
      <AuthForm 
        formTitle='Faça login e começe a usar!'
        submitFormButtonText='Entrar'
        submitFormButtonAction={login}

      />
      <TouchableOpacity onPress={handleRegisterClick}>
        <Text style={styles.link}>Não possui conta? Crie uma agora!</Text>
      </TouchableOpacity>
    </>
  )
}

