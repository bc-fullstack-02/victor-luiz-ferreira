import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
        marginTop: 20,
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
    content: {
        flex: 1
    },
    post: {
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,
        paddingBottom: 12,
    },
    postHeading: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 12,
    },
    postUserText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginStart: 12,
    },
    contentBody: {
        paddingHorizontal: 24,
    },
    contentText: {
        color: THEME.COLORS.TEXT,
        marginBottom: 18,
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    number: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        marginStart: 4,
        marginEnd: 24,

    },
})