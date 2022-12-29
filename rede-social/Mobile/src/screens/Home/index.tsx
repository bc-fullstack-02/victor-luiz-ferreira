import React, { useContext } from 'react'
import { Text, View}  from 'react-native'
import { UserCircle, Chat, Heart } from 'phosphor-react-native'

import { Context as AuthContext } from '../../context/AuthContext'

import { styles } from './styles'

export function Home() {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.post}>
          <View style={styles.postHeading}>
            <UserCircle color='white' size={48} weight='thin' />
            <Text style={styles.postUserText}>Ciclano</Text>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.contentText}>
              Testando essa bagaça porque sim e não sei mais o que escrever entao to coocando só pra encher linguiça mesmo sabe e vai ficar bom assim!
            </Text>
          </View>
          <View style={styles.footer}>
            <Chat size={24} color='white' weight='thin' />
            <Text style={styles.number}>9.999</Text>
            <Heart size={24} color='white' weight='thin' />
            <Text style={styles.number}>9.999</Text>
          </View>
        </View>
      </View>
    </View>
  )
}