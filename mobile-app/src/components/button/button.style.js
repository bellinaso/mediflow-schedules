import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    btn: {
        width: "100%",
        padding: 12,
        borderRadius: 6
    },

    primary: {
        backgroundColor: COLORS.blue,
    },

    danger: {
        backgroundColor: COLORS.red
    },

    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }
}

export {styles};