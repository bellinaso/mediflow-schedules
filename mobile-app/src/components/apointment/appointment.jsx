import { Image, Text, View } from "react-native";
import { styles } from "./appointment.style.js";
import icons from "../../constants/icons.js";
import Button from "../button/button.jsx";


function Apointment(props) {

    return (
        <View style={styles.appointment}>

            <Text style={styles.name}>
                {props.service} - {props.doctor}
            </Text>
            
            <Text style={styles.specialty}>
                {props.specialty}
            </Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>

                    <View style={styles.booking}>
                        <Image
                            source={icons.calendar}
                            style={styles.icon}/>
                        <Text style={styles.bookingDate}>15/10/2024</Text>
                    </View>
                    <View style={styles.booking}>
                        <Image
                            source={icons.clock}
                            style={styles.icon}/>
                        <Text style={styles.bookingHour}>14:00h</Text>
                    </View>

                </View>

                <View style={styles.containerButton}>
                    <Button text="Cancelar Reserva" theme="danger"/>
                </View>
            </View>
        </View>
    );
}


export default Apointment;