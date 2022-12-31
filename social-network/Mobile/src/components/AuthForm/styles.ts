import { StyleSheet } from 'react-native'
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 72,
    },
    containerPosition: {
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    button: {
        minWidth: 240,
        borderRadius: 12,
    },
    link: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.SM,
        textAlign: "center",
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: "underline"
    }
})