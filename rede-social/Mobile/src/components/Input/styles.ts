import { Placeholder } from 'phosphor-react-native'
import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "100%",
        minWidth: 200,
        borderRadius: 10,
        backgroundColor: THEME.COLORS.BACKGROUND_600,
        padding: 10,


    },
    input: {
        marginStart: 12,
        flex: 1,
        color: THEME.COLORS.INPUT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        placeHolderTextColor: THEME.COLORS.INPUT
    },
    
})