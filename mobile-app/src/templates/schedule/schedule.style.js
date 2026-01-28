import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = {
    container: {
        flex: 1,
        padding: 10,
        align: "space-between"
    },

    theme: {
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: COLORS.white,
        arrowColor: COLORS.blue,
    },
    timeText: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20,
    },
    picker: {
        outline: 0,
        padding: 10,
        borderColor: COLORS.blue,
        borderRadius: 15
    },
    buttonContainer: {
        // marginBottom: 20
    }
}

export {styles};