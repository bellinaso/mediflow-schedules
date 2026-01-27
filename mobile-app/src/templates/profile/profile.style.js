import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 12,
    },

    item: {
        borderBottomWidth: 1,
        borderColor: COLORS.gray4,
        paddingVertical: 15,
        paddingHorizontal: 15
    },

    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
    },
}

export {styles};