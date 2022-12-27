import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import { Heading } from '../../components/Heading'


export function Login() {
  return(
    <View style={styles.container}>
      <Heading title='Sysmap Parrot' subtitle='Faça login e começe a usar!'/>
    </View>
  )
}

