import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 20,
    },
    heading: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 12,
    },
    userNameText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginStart: 12,
    },
})