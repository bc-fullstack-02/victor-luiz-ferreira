import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'
import { THEME } from '../../theme'

import { FocusAwareStatusBar } from '../../components/FocusAwareStatusBar'

export function Friends() {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={THEME.COLORS.BACKGROUND_800}
            />
            <View>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}