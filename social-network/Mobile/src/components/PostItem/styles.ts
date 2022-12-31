import { StyleSheet } from 'react-native'
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {

    },
    post: {
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,
        paddingBottom: 12,
    },
    postHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    postUserText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
    },
    contentBody: {
        paddingHorizontal: 12,
    },
    image: {
        resizeMode: 'contain',
        height: 240,
        borderRadius: 12,
    },
    contentTextTitle: {
        color: THEME.COLORS.TEXT,
        marginBottom: 12,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
    },
    contentTextDescription: {
        color: THEME.COLORS.TEXT,
        marginBottom: 6,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    number: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        marginStart: 4,
        marginEnd: 12,
    },
})