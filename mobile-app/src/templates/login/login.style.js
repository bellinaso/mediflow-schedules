import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },

    logo: {
        width: 100,
        height: 23
    },

    logoContainer: {
        alignItems: "center"
    },

    inputContainer: {
        marginBottom: 15
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
    },

    footer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    footerAnchor: {
        color: COLORS.blue
    },
}

export {styles};