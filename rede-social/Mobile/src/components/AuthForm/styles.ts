import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    },
    containerPosition: {
        alignItems: 'center',
    },
    logo: {
        
        width: 120,
        height: 120,
    },
    button:{
        maxWidth: 240,
        borderRadius: 12,

    },
    link: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.SM,
        textAlign: 'center',
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: "underline",
    
    },
})