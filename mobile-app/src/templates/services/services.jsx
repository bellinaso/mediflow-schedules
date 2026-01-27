import { View, FlatList, Text, Image } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import icons from "../../constants/icons";
import Service from "../../components/service/service.jsx";


function Services() {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image source={icons.female}/>
                <Text style={styles.name}>Heber</Text>
                <Text style={styles.specialty}>Cardiologista</Text>

            </View>
            

            <FlatList
                data={doctors_services}
                keyExtractor={(service) => service.id_service}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Service
                    description={item.description}
                    price={item.price}
                    />;
                }}
            />
        </View>
    );
}

export default Services;