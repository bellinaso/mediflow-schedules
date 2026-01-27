import { View, FlatList, Text } from "react-native";
import { styles } from "./home.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import icons from "../../constants/icons";


function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Agende os seus serviços médicos</Text>

            <FlatList
                data={doctors}
                keyExtractor={(doctor) => doctor.id_doctor}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Doctor
                                name = {item.name}
                                icon = {item.icon == "M" ? icons.male : icons.female}
                                specialty = {item.specialty}
                            />;
                }}
            />
        </View>
    );
}

export default Home;