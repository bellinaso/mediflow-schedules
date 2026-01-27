import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    banner: {
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 35,
        paddingBottom: 35
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5,
    },

    specialty: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        marginTop: 3,
    },
}

export {styles};