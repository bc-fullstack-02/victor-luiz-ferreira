import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
    },
    heading: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    userNameText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginStart: 12,
    },
})