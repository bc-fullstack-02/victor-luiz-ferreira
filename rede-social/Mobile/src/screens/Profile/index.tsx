import { UserCircle } from 'phosphor-react-native'
import React, { useContext } from 'react'
import { Text, View, StatusBar}  from 'react-native'


import { Context as AuthContext } from '../../context/AuthContext'

import { styles } from './styles'
import { Button } from '../../components/Button'
import { THEME } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Profile() {
  const { user, logout } = useContext(AuthContext)
  

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button 
        title="Sair" 
        onPress={logout} 
      />
    </View>
  )
  
}