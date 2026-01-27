import { View, FlatList} from "react-native";
import { styles } from "./calendar.style";
import { appointments } from "../../constants/data";
import Apointment from "../../components/apointment/appointment.jsx";


function Calendar() {
    return (
        <View style={styles.container}>
            <FlatList
                data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Apointment
                            service = {item.service}
                            doctor = {item.doctor}
                            specialty = {item.specialty}/>;
                }}
            />
        </View>
    );
}

export default Calendar;


// 00:49