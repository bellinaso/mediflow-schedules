import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        borderBottomWidth: 1,
        borderColor: COLORS.gray4,
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 1,
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },

    container: {
        flexDirection: "row",
    },

    containerBooking: {
        flex: 1,
        flexDirection: "column",
    },

    containerButton: {
        flexDirection: "column",
        justifyContent: "flex-end"
    },

    booking: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3
    },

    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },


    bookingDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3
    },

    bookingHour: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3
    },
}

export {styles};