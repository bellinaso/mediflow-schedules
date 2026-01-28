import { Text, View } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import Button from "../../components/button/button";
import { Picker } from "@react-native-picker/picker";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";


function Schedule() {
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(minDate.getDate()+30);

    // const [selectedDate, setSelectedDate] = useState(minDate.toISOString().slice(0, 10));
    const [selectedDate, setSelectedDate] = useState("");

    const [selectedTime, setSelectedTime] = useState("");

    
    return (
        <View style={styles.container}>
            <Calendar
                theme={styles.theme}
                onDayPress={(pressedDay) => {
                        setSelectedDate(pressedDay.dateString)
                    }
                }
                markedDates={{
                    [selectedDate]: {selected: true},
                }}
                minDate={minDate.toDateString()}
                maxDate={maxDate.toDateString()}
            />
            <View>
                <Text style={styles.timeText}>
                    Horários
                </Text>
            </View>
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedTime}
                    onValueChange={(itemValue, itemIndex) => {
                            setSelectedTime(itemValue)
                        }
                    }
                >
                    <Picker.Item label="9:30" value="9:30"/>
                    <Picker.Item label="10:00" value="10:00"/>
                    <Picker.Item label="10:30" value="10:30"/>
                    <Picker.Item label="11:00" value="11:00"/>
                </Picker>
            </View>
            <View style={styles.buttonContainer}>
                <Button text={"Confirmar Agendamento"}/>
            </View>
        </View>
    );
}

export default Schedule;